import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

function ComboBox(props) {
    const { id, label, value, onChange, options, variant } = props

    return ( 
        <div style={{padding: '20px'}} data-testid='select-mediatype-combobox'>
            <Autocomplete
                id={id}
                disablePortal
                disableClearable
                options={options}
                value={value}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} label={label} variant={variant}/>}
            />
        </div>
    );
}

export default ComboBox;