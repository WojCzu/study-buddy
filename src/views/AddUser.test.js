import React from 'react';
import { screen, fireEvent } from '@testing-library/dom';
import { renderWithProviders } from 'helpers/renderWithProviders';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('AddUser', () => {
  it('Renders the component', () => {
    renderWithProviders(<AddUser />);
  });

  it('Adds user', () => {
    const name = 'Adam';
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: name },
    });
    fireEvent.change(screen.getByLabelText('Attendance'), {
      target: { value: '55' },
    });
    fireEvent.change(screen.getByLabelText('Average'), {
      target: { value: '4.5' },
    });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText(name);
  });
});
