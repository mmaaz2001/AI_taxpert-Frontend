import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, TextField, Button, Typography } from '@mui/material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';

import bot from './images/bot.png';
import user from './images/user.png';

const BotIcon = () => <img src={bot} alt="Bot" style={{ width: '30px', height: '27px', marginRight: '5px' }} />;
const UserIcon = () => <img src={user} alt="User" style={{ width: '30px', height: '27px', marginLeft: '5px' }} />;

const ChatApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    useEffect(() => {
        setMessages([{ sender: 'ChatBot', message: 'Hello! I am a UAE Tax Consultant. How can I assist you?' }]);
    }, []);

    const handleDrawerOpen = () => {
        setIsOpen(true);
    };

    const handleDrawerClose = () => {
        setIsOpen(false);
    };

    // const handleSendMessage = async (e) => {
    //     e.preventDefault();

    //     const userMessage = inputMessage.trim();

    //     if (userMessage !== '') {
    //         appendMessage('You', userMessage);
    //         setInputMessage('');

    //         try {
    //             const response = await fetch('https://taxpert-backend.brbtechnologies.pk/chatbot/chat/', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({ query: userMessage }),
    //             });

    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }

    //             const data = await response.json();
    //             appendMessage('ChatBot', data.response);
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     }
    // };

    const handleSendMessage = async (e) => {
        e.preventDefault();
    
        const userMessage = inputMessage.trim();
    
        if (userMessage !== '') {
            appendMessage('You', userMessage);
            setInputMessage('');
    
            try {
                // Get CSRF token from cookies
                const getCookie = (name) => {
                    const value = `; ${document.cookie}`;
                    const parts = value.split(`; ${name}=`);
                    if (parts.length === 2) return parts.pop().split(';').shift();
                };
                const csrfToken = getCookie('csrftoken');
    
                const response = await fetch('https://taxpert-backend.brbtechnologies.pk/chatbot/chat/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken, // Add CSRF token here
                    },
                    body: JSON.stringify({ message: userMessage }),
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                appendMessage('ChatBot', data.response);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };
    
    const appendMessage = (sender, message) => {
        setMessages((prevMessages) => [...prevMessages, { sender, message }]);
    };

    const handleCloseChat = () => {
        handleDrawerClose();
        setMessages([]);
    };

    const handleClearChat = () => {
        setMessages([]);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleDrawerOpen}
                sx={{
                    borderRadius: '1rem',
                    background: '#2B4C65',
                    '&:hover': { background: '#CDDCE8', },
                    gap: '0.4rem',
                    minWidth: '140px',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    bottom: '1.5rem',
                    marginLeft: 'auto',
                    marginRight: '3.5rem',
                    justifyContent: 'flex-end',
                    flexDirection: 'row-reverse', // Positioning to the left side in mobile mode
                    '@media (min-width:600px)': {
                        flexDirection: 'row', // Default positioning to the right in desktop mode
                    },
                }}
            >
                <Typography variant='body1' sx={{ fontSize: '0.9rem' }}>Chat With Us</Typography>
                <SmartToyOutlinedIcon
                    sx={{
                        fontSize: '1.5rem',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        margin: 'auto',
                    }}
                />
            </Button>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={handleDrawerClose}
                sx={{
                    '& .MuiDrawer-paper': {
                        top: 'auto',
                        left: 'auto',
                        right: 0,
                        bottom: 0,
                        maxHeight: '130%',
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        transition: 'transform 0.3s ease-in-out',
                        transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
                    },
                }}
            >
                <div style={{ padding: '8px', borderBottom: '2px black solid' }}>
                    <Button
                        color="secondary"
                        style={{ background: 'red' }}
                        onClick={handleCloseChat}
                    >
                        <CloseIcon style={{ color: 'white' }} />
                    </Button>
                </div>
                <div style={{ overflowY: 'auto', maxHeight: '70vh' }}>
                    <List>
                        {messages.map((message, index) => (
                            <ListItem key={index} style={{ justifyContent: message.sender === 'ChatBot' ? 'flex-start' : 'flex-end', gap: '15px' }}>
                                <div
                                    style={{
                                        background: message.sender === 'You' ? '#9cb1c1' : '#f5f5f5',
                                        color: message.sender === 'You' ? '#fff' : '#000',
                                        borderRadius: '8px',
                                        padding: '8px',
                                        maxWidth: 'calc(100% - 30px)',
                                        wordWrap: 'break-word',
                                        alignSelf: message.sender === 'ChatBot' ? 'flex-start' : 'flex-end',
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '14px'
                                    }}
                                >
                                    {message.sender === 'ChatBot' && <BotIcon />}
                                    {message.message}
                                    {message.sender === 'You' && <UserIcon />}
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div style={{ padding: '16px', marginTop: 'auto', display: 'flex', flexDirection: 'column-reverse' }}>
                    <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '8px' }}>
                        <TextField
                            label="Type a message"
                            variant="outlined"
                            fullWidth
                            value={inputMessage}
                            onChange={(e) => {
                                setInputMessage(e.target.value)
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={!inputMessage.trim()}
                        >
                            <SendIcon />
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleClearChat}
                        >
                            <DeleteForeverIcon />
                        </Button>
                    </form>
                </div>
            </Drawer>
        </div>
    );
};

export default ChatApp;