import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, AppBar } from '@mui/material';

export default function HeaderCard(props) {

  const { pic, title, detail , detailLink , onClick } = props

  return (
    <Card sx={{ maxWidth: 430 , boxShadow: 'none'}}>
      <AppBar position='static' sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, boxShadow: 'none', background: 'white' }}>
        <CardMedia
          sx={{ height: 160, minWidth: 170, flex: 'none' }}
          image={pic}
          title={title}
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: { xs: 'unset', sm: 260 }, textAlign: 'left' }}>
          <Typography variant="body2" sx={{ fontSize: '15px', mb: { xs: 1, sm: 0 } }} color="text.secondary">
            {detail}
          </Typography>
          <Typography onClick={onClick} variant="body2" sx={{marginTop : '1rem' , cursor : 'pointer' , fontSize: '15px', mb: { xs: 1, sm: 0 } }} color="text.secondary">
            {detailLink}
          </Typography>
        </CardContent>
      </AppBar>
    </Card>
  );
}