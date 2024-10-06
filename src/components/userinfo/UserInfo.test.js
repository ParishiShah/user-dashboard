import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import UserInfo from './UserInfo';

test('renders user name and email', () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  // Pass user object as `userData` prop
  render(<UserInfo userData={user} />);

  // Assertions
  const nameElement = screen.getByText(/john doe/i); 
  const emailElement = screen.getByText(/john.doe@example.com/i);

  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
});
