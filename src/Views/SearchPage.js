import { Button } from '@mui/material';
import React, { useState } from 'react';
import SearchOffIcon from '@mui/icons-material/SearchOff';

import AlbumCard from '../Components/AlbumCard/AlbumCard';
import ComboBox from '../Components/ComboBox/ComboBox';
import SearchTextField from '../Components/SearchTextField/SearchTextField';
import useFetch from '../Hooks/useFetch';

import './SearchPage.css'

function SearchPage() {
    
    const [artist, setArtist] = useState('');
    const [mediaType, setMediaType] = useState('all');
    const [searchResults, setSearchResults] = useState([]);

    const { get, loading } = useFetch("https://itunes.apple.com/search?")

    const options = ['all', 'movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm', 'tvShow', 'software', 'ebook'];

    function handleSearchClick(){
        var artistURL = `term=${artist.toLowerCase().replace(' ', '+')}`;
        var mediaURL = `entity=${mediaType}`;
        var url = mediaType === 'all' ? artistURL : `${artistURL}&${mediaURL}`
        get(url)
        .then(data => {
            //console.log(data);
            setSearchResults(data.results)
        })
        .catch(error => console.log(error))
    }

    return ( 
        <div>
            <div className='search-bar'>
                <SearchTextField id='search-artist-text-field' label='Buscar Termino' variant='outlined' value={artist} onChange={(event) => {setArtist(event.target.value)}} />
                <ComboBox id='media-type-combobox' label='Tipo de media' value={mediaType} onChange={(event, newValue) => {setMediaType(newValue)}} options={options} variant='outlined'/>
                <Button variant='outlined' onClick={handleSearchClick}>Buscar</Button>
            </div>
            <div className='search-results'>
                {
                    searchResults.map((album) => {
                        return <AlbumCard key={album.trackId} image={album.artworkUrl100} name={album.trackName} artist={album.artistName} price={album.collectionPrice} />
                    })
                }
                {
                    (searchResults.length === 0) &&
                    <div className='no-search-message'>
                        <SearchOffIcon fontSize='large'/>
                        <h2>No hay resultados todavia</h2>
                        <p>Sigue buscando tus !Tunes favoritos</p>
                    </div> 
                }
            </div>
            
        </div>
    );
}

export default SearchPage;