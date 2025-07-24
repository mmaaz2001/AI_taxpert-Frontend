import React from 'react'
import CorporateTax from '../../screens/Chat-Bot-E-Book-Corporate-Tax/CoprateTax'
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

export default function Ebook() {
    return (
        <div style={{ padding: '2rem' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <CloseIcon
                    onClick={() => { window.close(); }}
                    style={{ color: 'black', cursor: 'pointer', transition: 'color 0.3s' }}
                    onMouseOver={(e) => { e.target.style.color = 'red'; }}
                    onMouseOut={(e) => { e.target.style.color = 'black'; }}
                />
            </Box>
            <CorporateTax />
        </div>
    )
}
