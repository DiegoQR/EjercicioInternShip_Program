import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlbumCard from './AlbumCard';

afterEach(() => {
    cleanup();
});

test('Renders a single album card', () => {
  render(<AlbumCard name="Lost Heaven" artist="Vincent Footlose" price="14.99$"/>);

  var searchElement = screen.getByTestId('album-mediacard');

  expect(searchElement).toBeInTheDocument();
});
