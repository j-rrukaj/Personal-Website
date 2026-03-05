import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders primary navigation links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^resume$/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^projects$/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^contact$/i })).toBeInTheDocument();
});
