import React from 'react'
import { Typography } from '@mui/material';

export default function SectionTwo() {
    const sectionTwo = {
        second: {
            heading: '2.What is Corporate Tax?',
            firstPara: 'Corporate Tax is a form of direct tax levied on the net income of corporations and other businesses. ',
            secondPara: 'Corporate Tax is sometimes also referred to as “Corporate Income Tax” or “Business Profits Tax” in other jurisdictions.',
        },
    }

    const sectionTwoSecondArray = [sectionTwo.second.firstPara, sectionTwo.second.secondPara]
    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="secondHeading">
                {sectionTwo.second.heading}
            </Typography>
            {sectionTwoSecondArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} key={i}>
                    {i}
                </Typography>
            ))}

            {/* second para end */}
        </div>
    )
}
