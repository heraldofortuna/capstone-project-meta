import { render, screen } from '@testing-library/react';
import Online from './Online';

test('renders all menu items with titles and prices', () => {
  render(<Online />);
  
  expect(screen.getByRole('heading', { name: /Greek Salad/i })).toBeInTheDocument();
  expect(screen.getByText('$12.99')).toBeInTheDocument();

  expect(screen.getByRole('heading', { name: /Bruschetta/i })).toBeInTheDocument();
  expect(screen.getByText('$5.99')).toBeInTheDocument();

  expect(screen.getByRole('heading', { name: /Lemon Dessert/i })).toBeInTheDocument();
  expect(screen.getByText('$4.99')).toBeInTheDocument();
});
