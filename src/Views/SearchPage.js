import { Button } from '@mui/material';
import React, { useState } from 'react';
import ComboBox from '../Components/ComboBox';
import SearchTextField from '../Components/SearchTextField';
import './SearchPage.css'

function SearchPage() {
    
    const [artist, setArtist] = useState('');
    const [mediaType, setMediaType] = useState('All')

    const options = ['All', 'tvShow', 'music', 'musicVideo'];

    function handleSearchClick(){
        console.log(artist);
        console.log(mediaType);
    }

    return ( 
        <div>
            <div className='search-bar'>
                <SearchTextField id='search-artist-text-field' label='Buscar Artista' variant='outlined' value={artist} onChange={(event) => {setArtist(event.target.value)}} />
                <ComboBox id='media-type-combobox' label='Tipo de media' value={mediaType} onChange={(event, newValue) => {setMediaType(newValue)}} options={options} variant='outlined'/>
                <Button variant='outlined' onClick={handleSearchClick}>Buscar</Button>
            </div>
        </div>
    );
}

export default SearchPage;