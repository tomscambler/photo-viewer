import React from 'react';
import { render } from '@testing-library/react';
import  App  from './App';

test('renders Hello world text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/ imageUrl/i);
  expect(textElement).toBeInTheDocument();
});