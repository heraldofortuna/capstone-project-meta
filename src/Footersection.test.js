import { render, screen } from '@testing-library/react';
import Footersection from './Footersection';

test('renders footer logo with alt text', () => {
  render(<Footersection />);
  const logo = screen.getByAltText(/footer logo/i);
  expect(logo).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<Footersection />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Reservations/i)).toBeInTheDocument();
});

test('renders contact email link', () => {
  render(<Footersection />);
  const emailLink = screen.getByRole('link', { name: /little_lemon@gmail.com/i });
  expect(emailLink).toHaveAttribute('href', 'mailto:little_lemon@gmail.com');
});

test('renders footer note', () => {
  render(<Footersection />);
  expect(screen.getByText(/2025 © Little Lemon/i)).toBeInTheDocument();
});
