import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchTextField(props) 
{
    const {className, ...rest} = props
    return ( 
        <div data-testid='search-artist-text' className={className}>
            <TextField
                {...rest}
                fullWidth
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