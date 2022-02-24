import React from 'react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('Navbar renders properly', () => {
  it('renders properly', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it(' adds the active class to the clicked link', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    const list = screen.getByRole('list').childElementCount;
    expect(list).toEqual(3);
    const link = screen.getByText('Calculator');
    const otherLink = screen.getByText(/home/i);
    userEvent.click(link);
    expect(link.closest('a')).toHaveAttribute('class', 'active');
    expect(otherLink.closest('a')).not.toHaveAttribute('class', 'active');
  });
});
