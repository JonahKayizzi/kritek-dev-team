import { render } from '@testing-library/react';
import OurDevs from '../components/OurDevs';

describe('OurDevs tests', () => {
  test('Snapshot test. Should render OurDevs correctly', () => {
    const tree = render(<OurDevs />);
    expect(tree).toMatchSnapshot();
  });
});
