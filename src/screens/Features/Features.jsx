import { useState, useEffect } from 'react';
import { AppBar, Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';

export default function Features() {
  const [selectedItem, setSelectedItem] = useState('Learn from chatbot assistant');
  const [scrollTriggered, setScrollTriggered] = useState(false);

  const handleListItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollTriggered(true);
      } else {
        setScrollTriggered(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const featuresList = ['Learn from chatbot assistant', 'E-book' ,'Save Time', 'Simplify Tax Learning', 'Maximize Refunds' , 'Reduce Stress'];
  const contentMap = {
    "Learn from chatbot assistant": "Don't have time to read the entire book? No problem! Ask our AI chatbot any tax-related question you have. Trained on the ebook's content, it will respond in a clear, conversational manner, providing you with the information you need in the simplest way possible.",
    'E-book': 'Our innovative ebook puts all tax information at your fingertips. Simply hover over any section, clause, or article for instant definitions and details - no more flipping through pages or referencing separate documents.',
    'Save Time': 'Navigate complex tax information quickly and efficiently with the interactive features.',
    'Simplify Tax Learning': 'Understand even the most intricate tax concepts with clear explanations and definitions.',
    'Maximize Refunds': 'Ensure you claim every deduction and credit you deserve. Reduce Stress: Take the guesswork out of taxes with AI Taxpert as your reliable guide.',
    'Reduce Stress': 'Take the guesswork out of taxes with AI Taxpert as your reliable guide.',
};

  return (
    <div id='features' style={{ paddingBottom: '1rem', maxWidth: '1700px', margin: '0 auto' }}>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="flex-start" sx={{ justifyContent: 'center' }}>
        <AppBar position='static' sx={{ background: 'rgba(29, 71, 69, 1)', width: { xs: '100%', md: '50%' }, boxShadow: 'none', padding: '5rem', transform: scrollTriggered ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 1s' }}>
          <Box>
            <Typography variant='h4' sx={{ fontSize: '1.9rem', color: 'white' }}>Features</Typography>
            <Divider />
            <List>
              {featuresList.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textDecoration: selectedItem === item ? 'underline' : 'none',
                  }}
                  onClick={() => handleListItemClick(item)}
                >
                  <CheckIcon sx={{ color: 'rgba(255, 180, 0, 1)' }} />
                  <ListItemText primary={item} sx={{ color: 'rgba(230, 230, 232, 1)', marginLeft: '0.5rem' }} />
                  <Box sx={{ marginRight: { xs: 0, md: '40%' }, marginLeft: { xs: '1.5rem', md: 0 } }}>
                    <ControlPointSharpIcon sx={{ color: 'rgba(255, 180, 0, 1)', cursor: 'pointer' }} />
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </AppBar>
        <Box
          sx={{
            backgroundColor: 'white',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            height: 'auto',
            width: { xs: '100%', md: 'calc(50% - 10rem)' },
            margin: { xs: '2rem 0', md: '0 0 0 5rem' },
            padding: '2rem',
            position: 'relative',
            right: { xs: '0', md: '7rem' },
            top: { xs: '0', md: '6.5rem' },
            bottom: { xs: '15rem', md: '0' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: scrollTriggered && selectedItem === 'Learn from chatbot assistant' ? 'scaleX(100%)' : 'scaleX(100%)',
            transition: 'transform 1s',
            maxWidth: '1200px', 
          }}
        >
          <Box p={2} textAlign="center">
            <Typography variant='body1' sx={{ fontSize: '1.3rem' , padding : '1rem' }}>{contentMap[selectedItem]}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
