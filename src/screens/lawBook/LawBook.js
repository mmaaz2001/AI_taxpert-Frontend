import React, { useState } from 'react';
import { Tabs, Tab, Paper, Typography, Box, Popover, Table, TableContainer, TableHead, TableBody, TableRow, MenuItem, TableCell, Grid, Container, Button, Dialog, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CssBaseline from '@mui/material/CssBaseline';
import SectionDetail from './SectionDetail.js';
import { ImNewTab } from "react-icons/im";
import ReactDOMServer from 'react-dom/server';
import CloseIcon from './CloseIcon.js'
import './LawBook.css'
import ChatApp from '../ChatApp/ChatApp.js'
import faqs from './assets/faqs.png'

import CoprateTax from '../Chat-Bot-E-Book-Corporate-Tax/CoprateTax';
import Ct from '../Chat-Bot-E-Book-Corporate-Tax/Ct';
import CtPartThree from '../Chat-Bot-E-Book-Corporate-Tax/CtPartThree';
import CtPartFour from '../Chat-Bot-E-Book-Corporate-Tax/CtPartFour';
import CtPartFive from '../Chat-Bot-E-Book-Corporate-Tax/CtPartFive';
import CtPartSix from '../Chat-Bot-E-Book-Corporate-Tax/CtPartSix';
import CtPartSeven from '../Chat-Bot-E-Book-Corporate-Tax/CtPartSeven';
import CtPartEight from '../Chat-Bot-E-Book-Corporate-Tax/CtPartEight';
import CtPartNine from '../Chat-Bot-E-Book-Corporate-Tax/CtPartNine';
import CtPartTen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartTen';
import CtPartEleven from '../Chat-Bot-E-Book-Corporate-Tax/CtPartEleven';
import CtPartTwelve from '../Chat-Bot-E-Book-Corporate-Tax/CtPartTwelve';
import CtPartThirteen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartThirteen';
import CtPartFourteen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartFourteen';
import CtPartFifteen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartFifteen';
import CtPartSixteen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartSixteen';
import CtPartSeventeen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartSeventeen';
import CtPartEighteen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartEighteen';
import CtPartNinteen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartNinteen';
import CtPartTwentieth from '../Chat-Bot-E-Book-Corporate-Tax/CtPartTwentieth';
import CtPartTwentyfirst from '../Chat-Bot-E-Book-Corporate-Tax/CtPartTwentyfirst'
import CtPartTwentyTwo from '../Chat-Bot-E-Book-Corporate-Tax/CtPartTwentyTwo';
import CtPartTwentyThree from '../Chat-Bot-E-Book-Corporate-Tax/CtPartTwentyThree';

// SECTION IMPORTS

import SectionOne from '../sectionsCorporateTax/SectionOne'
import SectionTwo from '../sectionsCorporateTax/SectionTwo'
import SectionThree from '../sectionsCorporateTax/SectionThree'
import SectionFour from '../sectionsCorporateTax/SectionFour'
import SectionFive from '../sectionsCorporateTax/SectionFive'
import SectionSix from '../sectionsCorporateTax/SectionSix'
import SectionSeven from '../sectionsCorporateTax/SectionSeven'
import SectionEight from '../sectionsCorporateTax/SectionEight'
import SectionNine from '../sectionsCorporateTax/SectionNine'
import SectionTen from '../sectionsCorporateTax/SectionTen'
import SectionEleven from '../sectionsCorporateTax/SectionEleven'
import SectionTwelve from '../sectionsCorporateTax/SectionTwelve'
import SectionThirteen from '../sectionsCorporateTax/SectionThirteen'
import SectionFourteen from '../sectionsCorporateTax/SectionFourteen'
import SectionFifteen from '../sectionsCorporateTax/SectionFifteen'
import SectionSixteen from '../sectionsCorporateTax/SectionSixteen'
import SectionSeventeen from '../sectionsCorporateTax/SectionSeventeen'
import SectionEighteen from '../sectionsCorporateTax/SectionEighteen'
import LawBookIndexPage from './LawBookIndexPage';
import LawBookFaqsIndexPage from './LawBookFaqsIndexPage';
// import CtFaqs from './CtFaqs';

const LawBook = () => {
    const [mainTabValue, setMainTabValue] = useState(0);
    const [nestedTabValue, setNestedTabValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [showFAQs, setShowFAQs] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [sections, setSections] = useState([
        'Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5',
        'Section 6', 'Section 7', 'Section 8', 'Section 9', 'Section 10',
        'Section 11', 'Section 12', 'Section 13', 'Section 14', 'Section 15',
        'Section 16', 'Section 17', 'Section 18',
    ]);
    const [filteredSections, setFilteredSections] = useState(sections);

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        const filtered = sections.filter(section =>
            section.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSections(filtered);
    };


    const toggleFAQs = () => {
        setShowFAQs(!showFAQs);

        // Set the tab value to 3 when showing FAQs
        setMainTabValue(showFAQs ? 0 : 3);
    };

    const handleOpenPopup = (section) => {
        setOpenPopup(true);
        setSelectedSection(section);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };


    const handleMainTabChange = (event, newValue) => {
        setMainTabValue(newValue);
    };

    const handleNestedTabChange = (event, newValue) => {
        setNestedTabValue(newValue);
    };

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setSearchValue('');
        setFilteredSections(sections);
    };

    const handlePopoverClose = (section) => {
        setAnchorEl(null);
        if (section) {
            setSelectedSection(section);
        }
    };

    const open = Boolean(anchorEl);

    const openFullscreen = () => {
        const content = getContent();
        if (content) {
            const htmlContent = ReactDOMServer.renderToStaticMarkup(content); // Render component to HTML string

            const newWindow = window.open('', '_blank', 'fullscreen=yes');
            if (newWindow) {
                newWindow.document.write('<html><head><title>Fullscreen Content</title>');
                newWindow.document.write('<style>');
                newWindow.document.write(`
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                    }
                    h1,h2,h3,h4,h5,h6 {
                        font-size: 30px;
                    }
                    p {
                        font-size: 16px;
                    }
                    .fullscreen-container {
                        max-width: 100%;
                        height: 100%;
                        overflow: auto;
                        background-color: #f0f0f0;
                    }
                    .content {
                        background-color: #ffffff;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        padding: 5px;
                    }
                    .close-btn {
                        position: fixed;
                        top: 10px;
                        left: 10px;
                        border: 1px solid #cccccc;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                `);
                newWindow.document.write('</style></head><body>');
                newWindow.document.write('<div class="fullscreen-container">');
                newWindow.document.write('<div class="content">');
                newWindow.document.write(htmlContent); // Insert the HTML content
                newWindow.document.write('</div>');
                newWindow.document.write(`
                    <svg
                        class="close-btn"
                        style="cursor: pointer;"
                        onclick="closeFullscreen()"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                        fill="none"
                        stroke="black" // Changed stroke color to black
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                `);
                newWindow.document.write('</div></body></html>');
                newWindow.document.close();

                // Define the closeFullscreen function in the new window
                newWindow.closeFullscreen = () => {
                    newWindow.close();
                };
            }
        }
    };

    const openFullscreens = () => {
        window.open('/corporate-tax', '_blank');
    }
    const openFullscreening = () => {
        window.open('/faqs', '_blank');
    }


    const getContent = () => {
        switch (selectedSection) {
            case 'Section 1':
                return <SectionOne />;
            case 'Section 2':
                return <SectionTwo />;
            case 'Section 3':
                return <SectionThree />;
            case 'Section 4':
                return <SectionFour />;
            case 'Section 5':
                return <SectionFive />;
            case 'Section 6':
                return <SectionSix />;
            case 'Section 7':
                return <SectionSeven />;
            case 'Section 8':
                return <SectionEight />;
            case 'Section 9':
                return <SectionNine />;
            case 'Section 10':
                return <SectionTen />;
            case 'Section 11':
                return <SectionEleven />;
            case 'Section 12':
                return <SectionTwelve />;
            case 'Section 13':
                return <SectionThirteen />;
            case 'Section 14':
                return <SectionFourteen />;
            case 'Section 15':
                return <SectionFifteen />;
            case 'Section 16':
                return <SectionSixteen />;
            case 'Section 17':
                return <SectionSeventeen />;
            case 'Section 18':
                return <SectionEighteen />;
            default:
                return null;
        }
    };

    return (
        <div style={{ overflowX: 'hidden'}}>
            <Grid style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
                <Tabs
                    value={mainTabValue}
                    onChange={handleMainTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    sx={{ height: '3rem', marginLeft: '3rem' }}
                >
                    {/* <Tab label="Corporate tax" /> */}
                    {/* <Tab label="Value-added tax" /> */}
                    {/* <Tab label="" /> */}
                </Tabs>
                <TabPanel value={mainTabValue} index={0}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7} sx={{ padding: '0', marginRight: '5rem', width: '100%' ,  marginTop : '7px' }}> {/* Adjust width for mobile */}
                            <Typography paragraph>
                                <React.Fragment>
                                    <CssBaseline />
                                    <Box
                                        maxWidth="lg"
                                        className='customGrid'
                                        sx={{
                                            maxHeight: '60.2vh',
                                            overflowY: 'scroll',
                                            overflowX: 'hidden',
                                            bgcolor: '#F5F6F1',
                                            padding: '1rem',
                                            border: '1px black solid',
                                            maxWidth: '500% !important',
                                            '@media (max-width:600px)': {
                                                width: '120%', // Adjust width for mobile
                                            },
                                            '&::-webkit-scrollbar': {
                                                width: '12px',
                                            },
                                            '&::-webkit-scrollbar-thumb': {
                                                background: '#888',
                                                borderRadius: '6px',
                                            },
                                            '&::-webkit-scrollbar-thumb:hover': {
                                                background: '#555',
                                            },
                                            '&::-webkit-scrollbar-track': {
                                                background: 'transparent',
                                                borderRadius: '6px',
                                            },
                                        }}
                                    >
                                        <Box
                                            display="flex"
                                            justifyContent="flex-end"
                                        >
                                            <ImNewTab onClick={openFullscreens} style={{ cursor: 'pointer' }} />
                                        </Box>
                                        <CoprateTax /> <hr />

                                        {/* <a id='comeToBottom' href='#comeToTop'>Go To Top</a> */}
                                    </Box>
                                    {/* <Button sx={{bgcolor : '#2B4265' , color : 'white'}}>FAQS</Button> */}
                                </React.Fragment>
                            </Typography>
                            <Button
                                onClick={toggleFAQs}
                                sx={{
                                    background: '#FFB400', '&:hover': { background: '#FFB400', },
                                    paddingLeft: '2rem',
                                    paddingRight: '2rem',
                                    color: 'black',
                                }}
                            >
                                {showFAQs ? 'E-Book' : 'FAQS'}
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ maxHeight: '61.2vh', marginTop: '1rem', background: '#F5F6F1',  marginTop : '7px'}}>
                            <Tabs
                                value={nestedTabValue}
                                onChange={handleNestedTabChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                                sx={{
                                    '@media (max-width: 600px)': {
                                        maxWidth: '100%',
                                    },
                                }}
                            >
                                <Tab label="Index" sx={{ fontWeight: 'bold', color: 'black' }} />
                                <Tab
                                    label="Section ˅"
                                    sx={{ fontWeight: 'bold', color: 'black' }}
                                    onClick={handlePopoverOpen}
                                />
                            </Tabs>

                            <Popover
                                open={open}
                                anchorEl={anchorEl}
                                onClose={() => handlePopoverClose()}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Box p={2} sx={{ maxHeight: '200px', overflowY: 'auto' }}>
                                    <TextField
                                        label="Search"
                                        variant="outlined"
                                        value={searchValue}
                                        onChange={handleSearchInputChange}
                                        sx={{ padding: '0' }}
                                    />
                                    {filteredSections.map((section) => (
                                        <MenuItem key={section} onClick={() => handlePopoverClose(section)}>
                                            {section}
                                        </MenuItem>
                                    ))}
                                </Box>
                            </Popover>

                            <TabPanel value={nestedTabValue} index={0}>
                                <div style={
                                    {
                                        maxHeight: '40vh',
                                        maxWidth: '150% !important',
                                        cursor: 'pointer',
                                        overflowY: 'auto',
                                        paddingRight: '3px',
                                        overflowX: 'hidden',
                                        '&::-webkit-scrollbar': {
                                            width: '12px',

                                        },
                                        '&::-webkit-scrollbar-thumb': {

                                            borderRadius: '6px',
                                        },
                                        '&::-webkit-scrollbar-thumb:hover': {

                                        },
                                        '&::-webkit-scrollbar-track': {

                                            borderRadius: '6px',
                                        },
                                    }
                                }
                                >
                                    <TableContainer component={Paper}>
                                        <LawBookIndexPage />
                                    </TableContainer>
                                </div>
                            </TabPanel>

                            {selectedSection && (
                                <TabPanel value={nestedTabValue} index={1}>
                                    <div style={{ maxHeight: '100%', overflow: 'auto', maxWidth: '100%', width: '100%', paddingRight: '1rem' }}>
                                        <CssBaseline />
                                        <Container maxWidth="md" sx={{ bgcolor: '#fff', height: 'auto', overflow: 'auto', border: '1px black solid', padding: '0.5rem', '@media (max-width: 600px)': { maxWidth: '100%', padding: '0.5rem', }, }}>
                                            <div style={{ maxWidth: '100%', overflow: 'hidden', height: '36vh', overflowY: 'auto', overflowX: 'hidden' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    {/* <Typography variant='h6' sx={{ textDecoration: 'underline' }}>{selectedSection}</Typography> */}
                                                    <Typography variant='h6' sx={{ textDecoration: 'underline' }}></Typography>
                                                    <Button onClick={() => handleOpenPopup(selectedSection)} sx={{ float: 'right', display: 'block' }}><FullscreenIcon sx={{ fontSize: '1.7rem' }} /></Button>
                                                </div>
                                                <div>
                                                    {selectedSection === 'Section 1' && <SectionOne />}
                                                    {selectedSection === 'Section 2' && <SectionTwo />}
                                                    {selectedSection === 'Section 3' && <SectionThree />}
                                                    {selectedSection === 'Section 4' && <SectionFour />}
                                                    {selectedSection === 'Section 5' && <SectionFive />}
                                                    {selectedSection === 'Section 6' && <SectionSix />}
                                                    {selectedSection === 'Section 7' && <SectionSeven />}
                                                    {selectedSection === 'Section 8' && <SectionEight />}
                                                    {selectedSection === 'Section 9' && <SectionNine />}
                                                    {selectedSection === 'Section 10' && <SectionTen />}
                                                    {selectedSection === 'Section 11' && <SectionEleven />}
                                                    {selectedSection === 'Section 12' && <SectionTwelve />}
                                                    {selectedSection === 'Section 13' && <SectionThirteen />}
                                                    {selectedSection === 'Section 14' && <SectionFourteen />}
                                                    {selectedSection === 'Section 15' && <SectionFifteen />}
                                                    {selectedSection === 'Section 16' && <SectionSixteen />}
                                                    {selectedSection === 'Section 17' && <SectionSeventeen />}
                                                    {selectedSection === 'Section 18' && <SectionEighteen />}
                                                </div>
                                            </div>
                                        </Container>
                                    </div>
                                    <Dialog open={openPopup} onClose={handleClosePopup} maxWidth="md" fullWidth>
                                        <DialogTitle sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>
                                            {/* {selectedSection} */}
                                            <IconButton
                                                edge="end"
                                                color="inherit"
                                                onClick={handleClosePopup}
                                                aria-label="close"
                                                sx={{
                                                    marginLeft: 'auto',
                                                    order: { xs: 2, md: 3 },
                                                    ml: { xs: 1, md: 2 },
                                                }}
                                            >
                                                <FullscreenExitIcon />
                                            </IconButton>
                                            <ImNewTab onClick={openFullscreen} style={{ cursor: 'pointer', fontSize: '1.5rem', display: 'flex', justifyContent: 'flex-end' }} />
                                        </DialogTitle>
                                        <DialogContent sx={{ display: 'flex', alignItems: 'center' }}>
                                            <div>{getContent()}</div>
                                        </DialogContent>
                                    </Dialog>
                                </TabPanel>
                            )}
                            {!selectedSection && (
                                <TabPanel value={nestedTabValue} index={1}>
                                    <Container maxWidth="md" sx={{ bgcolor: '#fff', border: '1px black solid', maxWidth: '100%', width: '100%', maxHeight: '40vh', padding: '1rem' }}>
                                        <Box sx={{ width: '100%', maxHeight: '25rem', height: '40vh' }} />
                                    </Container>
                                </TabPanel>
                            )}
                            <div style={{ marginTop: '2.1rem', marginLeft: '4rem', width: '100%', maxWidth: '800px' }}>
                                <ChatApp style={{ maxWidth: '100%' }} />
                            </div>
                        </Grid>
                    </Grid> 
                </TabPanel>

                <TabPanel value={mainTabValue} index={3}>
                    <Grid container spacing={2} >
                        <Grid item xs={15} md={7} sx={{ padding: '0', marginRight: '5rem' }}>
                            <Typography paragraph>
                                <React.Fragment>
                                    <CssBaseline />
                                    <Box
                                        maxWidth="lg"
                                        className='customGrid'
                                        sx={{
                                            maxHeight: '61.2vh',
                                            overflowY: 'scroll',
                                            overflowX: 'hidden',
                                            bgcolor: '#F5F6F1',
                                            padding: '1rem',
                                            border: '1px black solid',
                                            maxWidth: '500% !important',
                                            '@media (max-width:600px)': {
                                                width: '120%',
                                            },
                                            '&::-webkit-scrollbar': {
                                                width: '12px',
                                            },
                                            '&::-webkit-scrollbar-thumb': {
                                                background: '#888',
                                                borderRadius: '6px',
                                            },
                                            '&::-webkit-scrollbar-thumb:hover': {
                                                background: '#555',
                                            },
                                            '&::-webkit-scrollbar-track': {
                                                background: 'transparent',
                                                borderRadius: '6px',
                                            },
                                        }}
                                    >
                                        <Box
                                            display="flex"
                                            justifyContent="flex-end"
                                        >
                                            <ImNewTab onClick={openFullscreening} style={{ cursor: 'pointer' }} />
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                backgroundImage: `url('${faqs}')`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                padding: '1rem',
                                                width: '100%'
                                            }}
                                        >
                                            <Typography variant='h4' sx={{ color: '#2B4C65' , borderBottom : '3px solid black'}}>Frequently Asked Questions</Typography>
                                        </Box>
                                        <Ct /> <hr />
                                        <CtPartThree /> <hr />
                                        <CtPartFour /> <hr />
                                        <CtPartFive /> <hr />
                                        <CtPartSix /> <hr />
                                        <CtPartSeven /> <hr />
                                        <CtPartEight /> <hr />
                                        <CtPartNine /> <hr />
                                        <CtPartTen /> <hr />
                                        <CtPartEleven /> <hr />
                                        <CtPartTwelve /> <hr />
                                        <CtPartThirteen /> <hr />
                                        <CtPartFourteen /> <hr />
                                        <CtPartFifteen /> <hr />
                                        <CtPartSixteen /> <hr />
                                        <CtPartSeventeen /> <hr />
                                        <CtPartEighteen /> <hr />
                                        <CtPartNinteen /> <hr />
                                        <CtPartTwentieth /> <hr />
                                        <CtPartTwentyfirst /> <hr />
                                        <CtPartTwentyTwo /> <hr />
                                        <CtPartTwentyThree /> <hr />

                                        {/* <a id='comeToBottom' href='#comeToTop'>Go To Top</a> */}
                                    </Box>
                                    {/* <Button sx={{bgcolor : '#2B4265' , color : 'white'}}>FAQS</Button> */}
                                </React.Fragment>
                            </Typography>
                            <Button
                                onClick={toggleFAQs}
                                sx={{
                                    background: '#FFB400', '&:hover': { background: '#F5F6F1', },
                                    paddingLeft: '2rem',
                                    paddingRight: '2rem',
                                    color: 'white',
                                }}
                            >
                                {showFAQs ? 'E-Book' : 'FAQS'}
                            </Button>
                        </Grid>

                        <Grid className='customGrid' item xs={12} md={4} sx={{ border: '3px black solid', height: '61.2vh', marginTop: '1rem', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', background: '#F5F6F1', }}>
                            <Tabs
                                value={nestedTabValue}
                                onChange={handleNestedTabChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                                sx={{
                                    '@media (max-width: 600px)': {
                                        maxWidth: '100%',
                                    },
                                }}
                            >
                                <Tab label="Index" sx={{ fontWeight: 'bold', color: 'black' }} />
                            </Tabs>


                            <TabPanel value={nestedTabValue} index={0}>
                                <div style={
                                    {
                                        maxHeight: '40vh',
                                        maxWidth: '150% !important',
                                        cursor: 'pointer',
                                        overflowY: 'auto',
                                        paddingRight: '3px',
                                        marginBottom : '1rem',
                                        overflowX: 'hidden',
                                        '&::-webkit-scrollbar': {
                                            width: '12px',

                                        },
                                        '&::-webkit-scrollbar-thumb': {

                                            borderRadius: '6px',
                                        },
                                        '&::-webkit-scrollbar-thumb:hover': {

                                        },
                                        '&::-webkit-scrollbar-track': {

                                            borderRadius: '6px',
                                        },
                                    }
                                }
                                >
                                    <TableContainer component={Paper}>
                                        <LawBookFaqsIndexPage />
                                    </TableContainer>
                                </div>
                                <div style={{ marginTop: '6.2rem', marginLeft: '5.5rem', width: '100%', maxWidth: '800px' }}>
                                    <ChatApp style={{ width: '100%' }} />
                                </div>
                            </TabPanel>
                            <TabPanel value={nestedTabValue} index={1}>
                                <div style={
                                    {
                                        maxHeight: '40vh',
                                        maxWidth: '150% !important',
                                        cursor: 'pointer',
                                        overflowY: 'auto',
                                        paddingRight: '3px',
                                        paddingBottom : '1rem',
                                        overflowX: 'hidden',
                                        border : 'none',
                                        '&::-webkit-scrollbar': {
                                            width: '12px',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            borderRadius: '6px',
                                        },
                                        '&::-webkit-scrollbar-thumb:hover': {

                                        },
                                        '&::-webkit-scrollbar-track': {
                                            borderRadius: '6px',
                                        },
                                    }
                                }
                                >
                                    <TableContainer component={Paper}>
                                        <LawBookFaqsIndexPage />
                                    </TableContainer>
                                </div>
                            </TabPanel>
                        </Grid>
                        {/* <div style={{ marginTop: '1rem', marginLeft: '4rem', width: '100%', maxWidth: '800px' }}>
                            <ChatApp style={{ maxWidth: '100%' }} />
                        </div> */}
                    </Grid>
                </TabPanel>

                {/* Content for Tab 2 */}
                <TabPanel value={mainTabValue} index={1}>
                    <Typography paragraph>Nothing to show...</Typography>
                </TabPanel>
                


            </Grid>
        </div>
    );
};

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
};

export default LawBook;