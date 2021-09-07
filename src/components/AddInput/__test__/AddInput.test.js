import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddInput from '../AddInput';

// tuscia fn vietoj () => {}
const mockFn = jest.fn()

describe('Input testing', () => {
  it('should render input', () => {
    render(<AddInput setTodos={mockFn} todos={[]} />);

    const inputEl = screen.getByPlaceholderText(/Add a new task here/i)
    expect(inputEl).toBeInTheDocument()
  })

  it('should be allowed to enter in input', () => {
    render(<AddInput setTodos={mockFn} todos={[]} />);

    const inputEl = screen.getByPlaceholderText(/Add a new task here/i);

    // change(El, koks change)
    fireEvent.change(inputEl, { target: { value: "do sports"}});
    expect(inputEl.value).toBe('do sports');
  });

  it('should clear input when press Add', () => {
    render(<AddInput setTodos={mockFn} todos={[]} />);

    const inputEl = screen.getByPlaceholderText(/Add a new task here/i);

    // fireEvent.change(inputEl, { target: { value: 'do sports' } });
    userEvent.type(inputEl, 'do sports');
    expect(inputEl).toHaveValue('do sports');

    const btnEl = screen.getByRole('button', { name: /add/i })
    userEvent.click(btnEl);

    expect(inputEl.value).toBe('');
  });


})