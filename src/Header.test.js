import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

// Mock the Nav component
jest.mock('./Nav', () => () => <nav data-testid="nav-component">Mocked Nav</nav>);

describe('Header Component', () => {
  test('renders the logo image', () => {
    render(<Header />);
    const logoImg = screen.getByAltText(/little-lemon/i);
    expect(logoImg).toBeInTheDocument();
  });

  test('renders the Nav component', () => {
    render(<Header />);
    const navElement = screen.getByTestId('nav-component');
    expect(navElement).toBeInTheDocument();
  });

  test('has the correct CSS class for header container', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner'); // <header> maps to "banner"
    expect(headerElement).toHaveClass('Header_site');
  });
});
