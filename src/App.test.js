import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RouteComponent from './components/RouteComponent';

describe('All pages open on nav link click', () => {
  it('Homepage opens on Home button', () => {
    render(
      <MemoryRouter>
        <RouteComponent />
      </MemoryRouter>,
    );
    userEvent.click(screen.getByText('Home'));
    expect(screen.getByText('Math Magicians')).toBeInTheDocument();
  });

  it('Calculator opens on Calculator button', () => {
    render(
      <MemoryRouter>
        <RouteComponent />
      </MemoryRouter>,
    );
    userEvent.click(screen.getByText('Calculator'));
    expect(screen.getByText('Let\'s do some Maths!')).toBeInTheDocument();
  });
});
