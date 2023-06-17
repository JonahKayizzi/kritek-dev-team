import { render, fireEvent } from '@testing-library/react';
import DevForm from '../components/DevForm';

describe('DevForm tests', () => {
  test('Snapshot test. Should render DevForm correctly', () => {
    const addDevProp = jest.fn();
    const { container } = render(<DevForm addDevProp={addDevProp} />);
    expect(container).toMatchSnapshot();
  });

  test('Should update input value on change', () => {
    const addDevProp = jest.fn();
    const { getByPlaceholderText } = render(
      <DevForm addDevProp={addDevProp} />,
    );

    const nameInput = getByPlaceholderText('Name ...');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    expect(nameInput.value).toBe('John Doe');
  });
});
