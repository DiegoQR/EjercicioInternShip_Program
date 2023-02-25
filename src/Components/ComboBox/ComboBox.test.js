import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComboBox from './ComboBox';

afterEach(() => {
    cleanup();
});

test('Renders the combobox media selector', () => {
  render(<ComboBox id='media-type-combobox' label='Tipo de media' value="All" options={['All', 'tvShow', 'music', 'musicVideo']} variant='outlined'/>);

  var searchElement = screen.getByTestId('select-mediatype-combobox');

  expect(searchElement).toBeInTheDocument();
});
