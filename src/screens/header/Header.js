import React from 'react';
import {  Toolbar, Typography } from '@mui/material';

export default function Header() {
    return (
        <Toolbar sx={{ width: 'fit-content', margin: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', borderBottom: '2px solid #FFB400' , borderTop: '2px solid #FFB400' , display : 'flex' , alignItems : 'center' , paddingTop : '0.6rem' , marginBottom : '0.6rem',position : 'relative', top : '10px'}}>
            <Typography variant="h5" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.4rem', width: '100%', color : 'white' , }}>
                Emara Tax
            </Typography>
        </Toolbar>

    );
};