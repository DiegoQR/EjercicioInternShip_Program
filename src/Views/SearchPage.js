import { Button } from '@mui/material';
import React, { useState } from 'react';

import AlbumCard from '../Components/AlbumCard';
import ComboBox from '../Components/ComboBox';
import SearchTextField from '../Components/SearchTextField';
import useFetch from '../Hooks/useFetch';

import './SearchPage.css'

function SearchPage() {
    
    const [artist, setArtist] = useState('');
    const [mediaType, setMediaType] = useState('all');
    const [searchResults, setSearchResults] = useState([]);

    const { get, loading } = useFetch("https://itunes.apple.com/search?")

    const options = ['movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm', 'tvShow', 'software', 'ebook', 'all'];

    function handleSearchClick(){
        var artistURL = `term=${artist.toLowerCase().replace(' ', '+')}`;
        var mediaURL = `entity=${mediaType}`;
        var url = mediaType === 'all' ? artistURL : `${artistURL}&${mediaURL}`
        get(url)
        .then(data => {
            console.log(data);
            setSearchResults(data.results)
        })
        .catch(error => console.log(error))
    }

    return ( 
        <div>
            <div className='search-bar'>
                <SearchTextField id='search-artist-text-field' label='Buscar Artista' variant='outlined' value={artist} onChange={(event) => {setArtist(event.target.value)}} />
                <ComboBox id='media-type-combobox' label='Tipo de media' value={mediaType} onChange={(event, newValue) => {setMediaType(newValue)}} options={options} variant='outlined'/>
                <Button variant='outlined' onClick={handleSearchClick}>Buscar</Button>
            </div>
            <div className='search-results'>
                {
                    searchResults.map((album) => {
                        return <AlbumCard key={album.collectionId} image={album.artworkUrl100} name={album.trackName} artist={album.artistName} price={album.collectionPrice} />
                    })
                }
            </div>
            
        </div>
    );
}

export default SearchPage;