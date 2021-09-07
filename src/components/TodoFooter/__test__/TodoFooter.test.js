import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";

import React from 'react'
import { BrowserRouter } from 'react-router-dom';

function MockTodoFooter({ numberOfIncompleteTasks }) {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
}

  describe('Footer tests', () => {

  // hooks
  beforeAll(() => {
    console.log('before all test');
  })

  beforeEach(() => {
    console.log('before every test');
  })

  afterEach(() => {
    console.log('after every test');
  })

   afterAll(() => {
     console.log('after all test');
   });

  it('Should render correct amount of tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={3} />);

    const parEl = screen.getByText(/3 tasks left/i)
    expect(parEl).toBeInTheDocument()
    expect(parEl).toBeVisible()
  })

  it('Should render correct single item text', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const parEl = screen.getByText(/1 task left/i)
    expect(parEl).toBeInTheDocument()
    expect(parEl).toBeVisible()
  })

  it('Should render correct html el p', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const parEl = screen.getByText(/1 task left/i)
    expect(parEl).toContainHTML('p')
  })
})