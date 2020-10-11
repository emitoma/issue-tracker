import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/This is my app/i);
  expect(h1Element).toBeInTheDocument();
});
