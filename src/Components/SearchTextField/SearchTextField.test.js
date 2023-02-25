import { render, screen, cleanup } from '@testing-library/react';
import SearchTextField from './SearchTextField';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup();
});

test('Renders the search text field', () => {
  render(<SearchTextField id='search-artist-text-field' label='Buscar Artista' variant='outlined'/>);

  var searchElement = screen.getByTestId('search-artist-text');

  expect(searchElement).toBeInTheDocument();
});
