import React, { useState } from 'react';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import bgLogin from './assests/bgLogin.svg';
import book from './assests/book.svg';
import MyButton from '../../screens/MyButton';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.title = 'AI Taxpert | Sign Up';
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitting form...');

        try {
            console.log('Sending request to backend...');
            const response = await fetch('http://192.168.1.208:8000/accounts/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            console.log('Response received:', response);

            const data = await response.json();
            console.log('Response data:', data);
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Sign Up Successful',
                    text: 'You have successfully signed up!',
                    confirmButtonText: 'OK',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/login');
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.message || 'An error occurred during signup.',
                });
            }
        } catch (error) {
            console.error('Error during signup:', error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message || 'An error occurred during signup.',
            });
        }
    };

    return (
        <>
            <ThemeProvider theme={createTheme()}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: `url(${bgLogin})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        <div style={{cursor : 'pointer'}} onClick={()=>navigate('/')}>
                            <Tooltip title='Home'>
                                <img alt='' src={book} style={{ float: 'right', width: '70px', marginTop: '20px', marginRight: '1rem' }} />
                            </Tooltip>
                        </div>
                        <Box
                            sx={{
                                my: 8,
                                mx: 'auto',
                                maxWidth: '400px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginTop: '160px',
                            }}
                        >
                            <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                                Sign Up
                            </Typography>
                            <Box component="form" validate sx={{ width: '100%' }} onSubmit={handleSubmit}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                    sx={{ mb: 1 }}
                                />
                                <MyButton type="submit" button={'Sign Up'} style={{ width: '100%', marginBottom: '5px' }} />
                                <Grid container>
                                    <Grid item xs>
                                    </Grid>
                                    <Grid item>
                                        <Link sx={{ cursor: 'pointer' }} variant="body2" onClick={() => navigate('/login')}>
                                            {"Already have an Account"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
}

export default Signup;  