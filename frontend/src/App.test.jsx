import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './src/App';

test('renders task dashboard heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Task Dashboard/i);
  expect(headingElement).toBeInTheDocument();
});