import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Todo from "../Todo";


import React from 'react'
import { BrowserRouter } from 'react-router-dom';


export default function TodoMockComp() {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
}


function addToTodo(todoArr) {
  
  const inputEl = screen.getByPlaceholderText(/Add a new task/);
  const btnEl = screen.getByRole('button', { name: /add/i });
 
  todoArr.forEach((todo) => {
    fireEvent.change(inputEl, { target: { value: todo } });
    fireEvent.click(btnEl);
  });
}



describe('Todo integration test', () => {

  it('should add todo after entering task to input and pressing btn add', () => {
    render(<TodoMockComp />);

     const inputEl = screen.getByPlaceholderText(/Add a new task here/i);
     const btnEl = screen.getByRole('button', { name: /add/i });
     
     userEvent.type(inputEl, 'do sports'); 
     userEvent.click(btnEl);
     expect(screen.getByText('do sports')).toBeInTheDocument()

     userEvent.type(inputEl, 'walk a dog');
     userEvent.click(btnEl);
     expect(screen.getByText('walk a dog')).toBeInTheDocument();

     userEvent.type(inputEl, 'read a book');
     userEvent.click(btnEl);
     expect(screen.getByText('read a book')).toBeInTheDocument();

     expect(screen.getByText(/3 tasks left/i)).toBeInTheDocument()

     const firstTodoEl = screen.getByText('do sports');
     const firstTodoEl2 = screen.getByText('walk a dog');
     const firstTodoEl3 = screen.getByText('read a book');


     userEvent.click(firstTodoEl);

     expect(firstTodoEl).toHaveClass('todo-item-active');
     expect(firstTodoEl2).not.toHaveClass('todo-item-active');
     expect(firstTodoEl3).not.toHaveClass('todo-item-active');

     userEvent.click(firstTodoEl2);

     expect(firstTodoEl).toHaveClass('todo-item-active');
     expect(firstTodoEl2).toHaveClass('todo-item-active');
     expect(firstTodoEl3).not.toHaveClass('todo-item-active');

     userEvent.click(firstTodoEl3);

     expect(firstTodoEl).toHaveClass('todo-item-active');
     expect(firstTodoEl2).toHaveClass('todo-item-active');
     expect(firstTodoEl3).toHaveClass('todo-item-active');

     userEvent.click(firstTodoEl3);

     expect(firstTodoEl).toHaveClass('todo-item-active');
     expect(firstTodoEl2).toHaveClass('todo-item-active');
     expect(firstTodoEl3).not.toHaveClass('todo-item-active');
  })
  
  it('Should add multiple todos to a list automaticaly', () => {
    render(<TodoMockComp />);

    addToTodo(['todo1', 'todo2', 'todo3']);
    expect(screen.getByText(/todo3/i)).toBeInTheDocument();
  });
  
})

