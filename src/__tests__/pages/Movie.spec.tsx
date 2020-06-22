import React from 'react';
import Movie from '../../pages/Movie';
import { render, fireEvent } from '@testing-library/react';

jest.mock('react-router-dom', () => {
  return {
    useRouteMatch: () => ({
      params: { imdbID: Math.random() },
    }),
  };
});

describe('Movie Page', () => {
  it('should be able to go back', async () => {
    global.history.back = jest.fn();

    const { getByText } = render(<Movie />);

    const goBackButton = getByText('Go back');

    fireEvent.click(goBackButton);

    expect(window.history.back).toHaveBeenCalled();
  });
});
