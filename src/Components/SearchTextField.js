import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchTextField(props) 
{
    const {id, label, variant} = props
    return ( 
        <div style={{padding: '20px'}} data-testid='search-artist-text'>
            <TextField
                id={id} 
                label={label}
                variant={variant}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                  }}
            />
        </div>
    );
}

export default SearchTextField;