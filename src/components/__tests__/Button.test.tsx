// src/components/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

test('renders Button with label', () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me" onClick={handleClick} />);

  fireEvent.click(screen.getByText('Click Me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
