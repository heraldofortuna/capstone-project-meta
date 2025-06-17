import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import About from './About';
import '@testing-library/jest-dom';

test('renders heading and intro text', () => {
  render(<About />);
  const heading = screen.getByRole('heading', { name: /about little lemon/i });
  const introText = screen.getByText(/discover what makes our mediterranean/i);
  expect(heading).toBeInTheDocument();
  expect(introText).toBeInTheDocument();
});

test('renders the first carousel image', () => {
  render(<About />);
  const image = screen.getByAltText('Slide 1');
  expect(image).toBeInTheDocument();
});

test('clicking next button changes the image', async () => {
  render(<About />);
  const nextButton = screen.getByRole('button', { name: '→' });
  fireEvent.click(nextButton);
  const newImage = await screen.findByAltText('Slide 2');
  expect(newImage).toBeInTheDocument();
});

test('clicking left arrow on first image shows last image', async () => {
  render(<About />);
  const leftButton = screen.getByRole('button', { name: '←' });
  fireEvent.click(leftButton);
  const lastImage = await screen.findByAltText('Slide 3');
  expect(lastImage).toBeInTheDocument();
});

test('renders the detailed about text', () => {
  render(<About />);
  const paragraph = screen.getByText(/little lemon chicago is a family owned/i);
  expect(paragraph).toBeInTheDocument();
});
