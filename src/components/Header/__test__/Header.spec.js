import { render, screen } from '@testing-library/react';
import Header from '../Header';


it('shoul render text passed as props', () => {
  render(<Header title="Test Header" />);

  const headerElement = screen.getByText(/test header/i);
  expect(headerElement).toBeInTheDocument();
});

it('header should be a heading with text', () => {
   render(<Header title='Test Header' />);

   const headingEl = screen.getByRole('heading', { name: 'Test Header' });
   expect(headingEl).toBeInTheDocument()
})

// pagal nematoma title
it('shoul have a title "second"', () => {
  render(<Header title='Test Header' />);

  const otherHeading = screen.getByTitle('second')
  expect(otherHeading).toBeInTheDocument()
})

// pagal tam skirta testId - nerekomenduotina naudoti daznai

it('should render main title with Id', () => {
  render(<Header title='Test Header' />);

  const otherHeading = screen.getByTestId('main-title');
  expect(otherHeading).toBeInTheDocument();
})