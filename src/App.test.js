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

  it('Quotes Page opens on \'Quote\' button', () => {
    render(
      <MemoryRouter>
        <RouteComponent />
      </MemoryRouter>,
    );
    userEvent.click(screen.getByText('Quote'));

    expect(screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms; it is about understanding. -William Paul Thurston')).toBeInTheDocument();
  });
});
