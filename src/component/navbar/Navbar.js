import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useMediaQuery, Drawer, List, ListItem, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import MyButton from '../../screens/MyButton';
import logo from './assets/logo.svg'


export default function Navbar() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width:600px)');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleToggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    
    // Function to get cookie by name
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// Logout function
const handleLogout = () => {
//     const csrfToken = getCookie('csrftoken');  // Retrieve CSRF token from cookies
//    console.log(csrfToken)
     fetch('https://taxpert-backend.brbtechnologies.pk/accounts/logout/', {
        method: "POST",
        credentials: "include",
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Logout failed');
        }
        Swal.fire({
            title: 'Logout Successful!',
            text: 'You have been successfully logged out.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    })
    .catch(error => {
        console.error('Logout error:', error);
        // Optionally show an error message to the user
    });
};


    
    // const handleLogout = () => {
    //     Swal.fire({
    //         title: 'Logout Successful!',
    //         text: 'You have been successfully logged out.',
    //         icon: 'success',
    //         confirmButtonText: 'OK'
    //     })
    // };

    const handleClickHome = () => {
        navigate('/');
        scrollToHome();
    };

    const scrollToHome = () => {
        handleMenuClose();
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
        handleMenuClose();
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
        handleMenuClose();
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
        handleMenuClose();
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar position="static" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', boxShadow: 'none' }}>
            <Toolbar>
                <Box onClick={handleClickHome} sx={{cursor : 'pointer'}}>
                    <img src={logo} width={100} height={57} />
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
                    <Button color="inherit" sx={{ color: 'white', marginRight: '20px', '&:hover': { textDecoration: 'underline', transform: 'scale(1.1)', }, transition: 'transform 0.3s', }} onClick={handleClickHome}>
                        Home
                    </Button>
                    <Button color="inherit" sx={{ color: 'white', marginRight: '20px', '&:hover': { textDecoration: 'underline', transform: 'scale(1.1)', }, transition: 'transform 0.3s', }} onClick={handleClickFeatures}>
                        Features
                    </Button>
                    <Button color="inherit" sx={{ color: 'white', marginRight: '20px', '&:hover': { textDecoration: 'underline', transform: 'scale(1.1)', }, transition: 'transform 0.3s', }} onClick={handleClickAbout}>
                        About Us
                    </Button>
                    <Button color="inherit" sx={{ color: 'white', marginRight: '20px', '&:hover': { textDecoration: 'underline', transform: 'scale(1.1)', }, transition: 'transform 0.3s', }} onClick={handleClickContact}>
                        Contact
                    </Button>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuClick}
                        sx={{ float: 'right' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleClickHome}>Home</MenuItem>
                        <MenuItem onClick={handleClickFeatures}>Features</MenuItem>
                        <MenuItem onClick={handleClickAbout}>About Us</MenuItem>
                        <MenuItem onClick={handleClickContact}>Contact</MenuItem>
                        {/* <MenuItem onClick={handleLogout}>Logout</MenuItem> */}
                        <MenuItem onClick={() => {
    handleMenuClose();
    navigate('/');
}}>
    Logout
</MenuItem>

                    </Menu>
                </Box>
                {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }} onClick={handleLogout}>
                    <MyButton button={"Logout"} />
                </Box> */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} onClick={() => navigate('/')}>
    <MyButton button={"Logout"} />
</Box>

            </Toolbar>
        </AppBar>
    );
};
