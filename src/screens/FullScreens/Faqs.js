import React from 'react'
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
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

export default function Faqs() {
    return (
        <div style={{ padding: '2rem' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <CloseIcon
                    onClick={() => { window.close(); }}
                    style={{ color: 'black', cursor: 'pointer', transition: 'color 0.3s' }}
                    onMouseOver={(e) => { e.target.style.color = 'red'; }}
                    onMouseOut={(e) => { e.target.style.color = 'black'; }}
                />
            </Box>
            <h1>WELCOME TO FAQS</h1>
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
        </div>
    )
}
