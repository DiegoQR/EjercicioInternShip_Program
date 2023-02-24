import React, { useState } from 'react';
import ComboBox from '../Components/ComboBox';
import SearchTextField from '../Components/SearchTextField';

function SearchPage() {
    
    const [artist, setArtist] = useState('');
    const [mediaType, setMediaType] = useState('All')

    const options = ['All', 'tvShow', 'music', 'musicVideo'];
    return ( 
        <div>
            <SearchTextField id='search-artist-text-field' label='Buscar Artista' variant='outlined' value={artist} onChange={(event, newValue) => {setArtist(newValue)}} />
            <ComboBox id='media-type-combobox' label='Tipo de media' value={mediaType} onChange={(event, newValue) => {setMediaType(newValue)}} options={options} variant='outlined'/>
        </div>
    );
}

export default SearchPage;