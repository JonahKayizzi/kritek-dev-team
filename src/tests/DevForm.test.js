import { render } from '@testing-library/react';
import DevForm from '../components/DevForm';

describe('DevForm tests', () => {
  test('Snapshot test. Should render DevForm correctly', () => {
    const tree = render(<DevForm />);
    expect(tree).toMatchSnapshot();
  });
});
