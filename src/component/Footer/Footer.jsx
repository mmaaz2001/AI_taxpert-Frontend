import React from 'react';
import { Grid, Typography, IconButton , Box } from '@mui/material';
import { Facebook, Twitter, Instagram , LinkedIn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.svg'

const Footer = () => {
  const navigate = useNavigate()
  const handleClickHome = () => {
    navigate('/');
    scrollToHome();
  };

  const scrollToHome = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickFeatures = () => {
    navigate('/');
    scrollToFeatures();
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickAbout = () => {
    navigate('/');
    scrollToAbout();
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickContact = () => {
    navigate('/');
    scrollToContact();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: '#184341', color: 'white', padding: '3rem' }}>
      <Grid container spacing={3}>
        {/* First Column */}
        <Grid item xs={12} sm={5}>
          <Grid container direction="column" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
            <Grid item>
              {/* Your logo */}
              <Box onClick={handleClickHome} sx={{cursor : 'pointer'}}>
                    <img src={logo} width={100} height={57} alt='Indenta Logo' />
                </Box>
            </Grid>
            <Grid item>
              {/* Text */}
              <Typography variant="body1" sx={{ maxWidth: '16rem' }}>Gravida vulputate aliquet tempor sit. Neque sed pretium non urna sed etid aenean haretra quam placerat adipiscing penatibus aliquam.</Typography>
            </Grid>
            <Grid item sx={{ marginTop: '1.3rem', display: 'flex', gap: '1rem' }}>
              {/* Social Icons */}
              <IconButton aria-label="Facebook" sx={{ background: 'linear-gradient(0deg, #FFB400, #FFB400), linear-gradient(0deg, #FFB400, #FFB400)', }}>
                <Facebook sx={{ color: 'white' }} />
              </IconButton>
              <IconButton aria-label="Twitter" sx={{ background: 'linear-gradient(0deg, #FFB400, #FFB400), linear-gradient(0deg, #FFB400, #FFB400)', }}>
                <Twitter sx={{ color: 'white' }} />
              </IconButton>
              <IconButton aria-label="Instagram" sx={{ background: 'linear-gradient(0deg, #FFB400, #FFB400), linear-gradient(0deg, #FFB400, #FFB400)', }}>
                <Instagram sx={{ color: 'white' }} />
              </IconButton>
              <IconButton aria-label="LinkedIn" sx={{ background: 'linear-gradient(0deg, #FFB400, #FFB400), linear-gradient(0deg, #FFB400, #FFB400)', }}>
                <LinkedIn sx={{ color: 'white' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={3} sx={{ marginTop: '3rem' }}>
          <Grid container direction="column">
            <Grid item sx={{ marginBottom: '1.3rem' }}>
              {/* Tabs */}
              <Typography variant="h6" sx={{ color: 'rgba(255, 180, 0, 1)' }}>Quick Menu</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', flexDirection: 'column' }}>
              <Typography variant="body1" sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' } }} onClick={handleClickHome}>Home</Typography>
              <Typography variant="body1" sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' } }} onClick={handleClickFeatures}>Features</Typography>
              <Typography variant="body1" sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' } }} onClick={handleClickAbout}>About</Typography>
              <Typography variant="body1" sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' } }} onClick={handleClickContact}>Contact Us</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} sm={4} sx={{ marginTop: '3rem' }}>
          <Grid container direction="column">
            <Grid item sx={{ marginBottom: '1.3rem' }}>
              {/* Address */}
              <Typography variant="h5" sx={{ color: 'rgba(255, 180, 0, 1)' }}>Contact</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
              <Typography variant="body1" sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>
                Address: 21-C, 5th Lane, Zamzama Commercial, Phase 5, DHA, Karachi, Pakistan
              </Typography>
              <Typography variant="body1" sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>
                <a href="mailto:info@indenta-technologies.com" style={{ color: 'white', textDecoration: 'none' }}>info@indenta-technologies.com</a>
              </Typography>
              <Typography variant="body1" sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>+92 21 111 124 338</Typography>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
