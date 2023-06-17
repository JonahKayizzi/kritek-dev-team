import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import OurDevs from '../components/OurDevs';
import { apiSlice } from '../redux/apiSlice';

describe('OurDevs tests', () => {
  test('Snapshot test. Should render OurDevs correctly', () => {
    const tree = render(
      <ApiProvider api={apiSlice}>
        <Router>
          <OurDevs />
        </Router>
      </ApiProvider>
    );
    expect(tree).toMatchSnapshot();
  });
});
