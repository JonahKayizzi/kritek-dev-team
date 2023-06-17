import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App tests', () => {
  test('renders CURRENCIES text', () => {
    render(<App />);
    const titleElement = screen.getByText(/Edit/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('Snapshot test. Should render App correctly', () => {
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });
});
