import React from 'react';
import { Box } from '@mui/material'

import albumDefault from '../Assets/image-album-default.png';
import './AlbumCard.css';

function AlbumCard(props) {
    const {key, image, name, artist, price} = props;

    const defaultSx = {
        boxShadow: 1,
        borderRadius: 2,
        backgroundColor: 'background.paper',
        /*
        '&:hover': {
          backgroundColor: 'background.paper',
          opacity: [0.9, 0.8, 0.7],
        },
        */
    }

    return ( 
        <div data-testid='album-mediacard' key={key}>
            <Box sx={defaultSx}>
                <div className='box-container'>
                    <div>
                        <img
                            src={image ?? albumDefault}
                            style={{height: "100px", width: "100px"}}
                            alt={name} 
                        />
                    </div>
                    <div>
                        <h2>{name}</h2>
                        <h4>{artist}</h4>
                        {price !== undefined && price !== 0 ? <p>{`${price} $`}</p> : <></>}
                    </div>
                </div>
            </Box>

        </div>
    );
}

export default AlbumCard;