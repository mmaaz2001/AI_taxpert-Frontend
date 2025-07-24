import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { TextField, Grid, Typography, Container, AppBar } from '@mui/material';
import MyButton from '../MyButton';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { useInView } from 'react-intersection-observer';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, phoneNumber, message });
    Swal.fire({
      title: 'Thank you For Contacting Us!',
      text: "we'll contact you soon .",
      icon: 'success',
      confirmButtonText: 'OK'
    })
  };

  const [animatedProps, set] = useSpring(() => ({
    transform: 'scale(0.8)',
    opacity: 0,
  }));

  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      set({ transform: 'scale(1)', opacity: 1 });
    } else {
      set({ transform: 'scale(0.8)', opacity: 0 });
    }
  }, [inView, set]);

  return (
    <animated.div id='contact' style={animatedProps}>
      <AppBar position='static' sx={{ bgcolor: 'transparent', maxWidth: '1500px', margin: 'auto', paddingBottom: '1rem', paddingTop: '1rem' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6} ref={ref}>
            <Container sx={{ background: 'rgba(24, 67, 65, 1)', borderRadius: '1px', backgroundSize: 'cover', height: 'fit-content', display: 'flex', flexDirection: 'column', padding: '3rem', paddingTop: '4rem', paddingBottom: '4rem', gap: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Typography variant='h4' sx={{ color: 'rgba(255, 180, 0, 1)' }}>Contact Information</Typography>
                <Typography variant='body2'>Say something to start a live chat!</Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <Typography variant='body1' sx={{ display: 'flex', gap: '2rem' }}>
                  <PhoneInTalkOutlinedIcon sx={{ color: 'rgba(255, 180, 0, 1)' }} />
                  <span style={{ fontSize: '0.8rem' }}>
                    +1012 3456 789
                  </span>
                </Typography>
                <Typography variant='body1' sx={{ display: 'flex', gap: '2rem' }}>
                  <MailOutlinedIcon sx={{ color: 'rgba(255, 180, 0, 1)' }} />
                  <span style={{ fontSize: '0.8rem' }}>
                    demo@gmail.com
                  </span>
                </Typography>
                <Typography variant='body1' sx={{ display: 'flex', gap: '2rem' }}>
                  <FmdGoodOutlinedIcon sx={{ color: 'rgba(255, 180, 0, 1)' }} />
                  <span style={{ fontSize: '0.8rem' }}>
                    21-C, 5th Lane, Zamzama Commercial, Phase 5, DHA, Karachi, Pakistan
                  </span>
                </Typography>
              </div>
            </Container>
          </Grid>
          <Grid item xs={12} md={6} ref={ref}>
            <Container maxWidth="md" sx={{ padding: '2rem' }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      variant="standard"
                      fullWidth
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      variant="standard"
                      fullWidth
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      variant="standard"
                      fullWidth
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone Number"
                      variant="standard"
                      fullWidth
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      variant="standard"
                      multiline
                      rows={1}
                      fullWidth
                      placeholder="Write your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      InputProps={{
                        style: {
                          resize: 'vertical',
                          overflowY: 'auto',
                          overflowX: 'hidden',
                        },
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <MyButton button={'Send Message'} type='submit' style={{ paddingRight: '1.5rem', paddingLeft: '1.5rem', paddingTop: '1.15rem', paddingBottom: '1.15rem', color: 'white' }} />
                  </Grid>
                </Grid>
              </form>
            </Container>
          </Grid>
        </Grid>
      </AppBar>
    </animated.div>
  );
};

export default ContactForm;
