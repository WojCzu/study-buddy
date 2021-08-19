import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
  it('Renders the root component as unauthenticated user', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('Diplays error message when wrong credentials are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'Test-login' } });
    fireEvent.change(password, { target: { value: 'Test-password' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it('Diplays authenticated application', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(password, { target: { value: '1234' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Ova/));
  });
});
