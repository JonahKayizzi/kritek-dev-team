import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';

describe('NavBar tests', () => {
  test('Snapshot test. Should render NavBar correctly', () => {
    const tree = render(<NavBar />);
    expect(tree).toMatchSnapshot();
  });
});
