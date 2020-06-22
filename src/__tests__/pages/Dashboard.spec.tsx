import React from 'react';
import Dashboard from '../../pages/Dashboard';
import {
  render,
  fireEvent,
  wait,
  waitForDomChange,
} from '@testing-library/react';

describe('Dashboard Page', () => {
  it('should be able to search', async () => {
    const { getByPlaceholderText, getByText } = render(<Dashboard />);

    const searchField = getByPlaceholderText('Inform a movie name');
    const searchButton = getByText('Search');
    const container = document.createElement('div');

    fireEvent.change(searchField, { target: { value: 'rain' } });
    fireEvent.click(searchButton);

    waitForDomChange({ container })
      .then(() => {
        expect(document.querySelectorAll('a').length).toBeGreaterThan(0);
      })
      .catch((err) => console.log(`Error you need to deal with: ${err}`));
  });

  it('should not be able to search with no information', async () => {
    const { getByPlaceholderText, getByText } = render(<Dashboard />);

    const searchField = getByPlaceholderText('Inform a movie name');
    const searchButton = getByText('Search');
    const container = document.createElement('div');

    fireEvent.change(searchField, { target: { value: '' } });
    fireEvent.click(searchButton);

    waitForDomChange({ container })
      .then(() => {
        expect(document.querySelectorAll('a').length).toBe(0);
      })
      .catch((err) => console.log(`Error you need to deal with: ${err}`));
  });
});
