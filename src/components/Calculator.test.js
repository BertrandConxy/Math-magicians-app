import React from 'react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

describe('calculator rendered properly', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Calculator responds to user interactions', () => {
  it('Displays the result', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    userEvent.click(screen.getByTestId('7'));
    expect(display.innerHTML).toBe('7');
  });
  it('does the calculation and displays the result', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    userEvent.click(screen.getByTestId('AC'));
    userEvent.click(screen.getByTestId('7'));
    expect(display.innerHTML).toBe('7');
    userEvent.click(screen.getByTestId('+'));
    userEvent.click(screen.getByTestId('8'));
    userEvent.click(screen.getByTestId('='));
    expect(display.innerHTML).toBe('15');
  });
});
