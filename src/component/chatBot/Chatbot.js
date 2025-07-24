import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../screens/header/Header';
import LawBook from '../../screens/lawBook/LawBook';
import backgroundImage from '../Home/assests/headerBg.png';
import Navbar from '../navbar/Navbar';

export default function Chatbot() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     document.title = 'AI Taxpert | Chatbot';
        
    //     // Check authentication
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         // If token doesn't exist, redirect to login page
    //         navigate('/login');
    //     }
    // }, [navigate]);

    return (
        <div style={{ padding : '2rem' , backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '125%'  }}>
            <Navbar />
            <Header />
            <LawBook />
        </div>
    );
}
