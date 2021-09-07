import { screen, render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('Async testing', () => {
  it('Renders Folowers on the screen', async () => {
    render(<MockFList />);
    // screen.debug();
    const contactElArr = await screen.findAllByTestId(/contact-el/);
    expect(contactElArr).not.toHaveLength(0);
    expect(contactElArr).toHaveLength(2);
    // expect(contactElArr).toBeInTheDocument();
  });

  
  it('Renders Two Follower card on the screen', async () => {
    render(<MockFList />);

    let contactEl;

    await waitFor(() => {
      contactEl = screen.getByTestId(/contact-el-0/);
    });
    // arba const contactEl = await screen.findByTestId(/contact-el-0/);
    
    expect(contactEl).toBeInTheDocument();
    // screen.debug();
  });
});
