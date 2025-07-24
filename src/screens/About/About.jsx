import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import AboutImage from './assets/AboutImage.png';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [textRef, textInView] = useInView(); // Use useInView for textRef
  const [imageRef, imageInView] = useInView(); // Use useInView for imageRef

  useEffect(() => {
    if (textInView || imageInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [textInView, imageInView]);

  return (
    <Box
      id='about'
      sx={{
        backgroundColor: 'transparent',
        backgroundImage: 'radial-gradient(circle, rgba(24, 67, 65, 0.73) 0%, #184341 100%)',
        backgroundPosition: '50% 50%',
        backgroundSize: '100% 100%',
        width: '100%',
        height: '100%',
        paddingBottom: '1rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '1500px',
        margin: 'auto'
      }}
    >
      <Box
        sx={{
          maxWidth: '100%', // Set initial max-width to 100%
          '@media (min-width: 1200px)': {
            maxWidth: '1200px', // Set max-width to 1200px when screen size exceeds 1200px
          },
        }}
      >
        <Grid container spacing={2} sx={{display : 'flex' , alignItems : 'center'}}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: { xs: '2rem', md: '5rem' },
                textAlign: { xs: 'center', md: 'left' },
                transition: 'opacity 0.5s 0.5s, transform 0.5s 0.5s', // Delay animation by 0.5 seconds
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
              ref={textRef}
            >
              <Typography variant="h6" sx={{ textTransform: 'uppercase', color: 'rgba(255, 180, 0, 1)' }}>
                ABOUT US
              </Typography>
              {/* <Typography variant="h4" sx={{ marginTop: '10px', marginBottom: '10px', textAlign: 'justify', color: 'white' }}>
                AiTaxN Is The Best Solution For Your Tax Services
              </Typography> */}
              <Typography variant="body1" sx={{ marginTop: '10px', marginBottom: '10px', textAlign: 'justify', color: 'white' , fontSize : '1.5rem'}}>
                Our team is comprised of tax professionals and technology experts who share a common goal: to make tax information accessible and understandable for everyone. We bring together years of experience in tax law, education, and software development to create innovative solutions like AI Taxpert.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingRight: { xs: '2rem', md: 0 },
                transition: 'opacity 0.5s 0.5s, transform 0.5s 0.5s', // Delay animation by 0.5 seconds
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
              ref={imageRef}
            >
              <img src={AboutImage} alt="About" style={{ maxWidth: '100%', height: 'auto' , display : 'flex' , alignItems : 'center' , marginTop : '1.3rem'}} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
