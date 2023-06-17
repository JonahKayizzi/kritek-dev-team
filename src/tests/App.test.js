import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App tests', () => {
  test('renders Kritek Devs text', () => {
    render(<App />);
    const titleElement = screen.getByText(/Kritek Devs/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('Snapshot test. Should render App correctly', () => {
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });
});
