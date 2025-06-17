import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Booking from './Booking';

test('renders form inputs and submit button', () => {
  render(<Booking />);
  expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Make Your Reservation/i })).toBeInTheDocument();
});

test('updates input fields on user input', () => {
  render(<Booking />);
  const firstNameInput = screen.getByLabelText(/First Name/i);
  fireEvent.change(firstNameInput, { target: { value: 'Hyra' } });
  expect(firstNameInput.value).toBe('Hyra');

  const guestsInput = screen.getByLabelText(/Number of Guests/i);
  fireEvent.change(guestsInput, { target: { value: '4' } });
  expect(guestsInput.value).toBe('4');
});

test('shows success toast and confirmation on form submit', async () => {
  render(<Booking />);
  
  fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Hyra' } });
  fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'S' } });
  fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: '2025-06-06' } });
  fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

  fireEvent.click(screen.getByRole('button', { name: /Make Your Reservation/i }));

  expect(screen.getByText(/Reservation Successfully Submitted!/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Your Reservation/i })).toBeInTheDocument();
  expect(screen.getByText(/Hyra S/i)).toBeInTheDocument();
  expect(screen.getByText(/2025-06-06/i)).toBeInTheDocument();


  await waitFor(() => {
    expect(screen.queryByText(/Reservation Successfully Submitted!/i)).not.toBeInTheDocument();
  }, { timeout: 3500 });
});
