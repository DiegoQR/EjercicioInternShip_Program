import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

function ComboBox(props) {
    const { className, label, variant, ...rest } = props

    return ( 
        <div data-testid='select-mediatype-combobox' className={className}>
            <Autocomplete
                {...rest}
                disablePortal
                disableClearable
                renderInput={(params) => <TextField {...params} label={label} variant={variant}/>}
            />
        </div>
    );
}

export default ComboBox;