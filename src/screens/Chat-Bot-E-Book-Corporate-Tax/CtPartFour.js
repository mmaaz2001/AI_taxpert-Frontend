import React from 'react'
import { Typography } from '@mui/material';

export default function CtPartFour() {

    const ctPartFour = {    
        first: {
            heading: 'Will the UAE CT regime tax large multinationals at the global minimum tax rate?',
            firstPara: 'The UAE is a member of the OECD BEPS Inclusive Framework and is committed to addressing the challenges faced by tax jurisdictions internationally. As such, the introduction of a CT regime helps to provide the UAE with a framework to adopt the Pillar Two rules.',
            secondPara: 'Until such time as the Pillar Two rules are adopted by the UAE, multinationals will be subject to CT under the regular UAE CT regime.',
            thirdPara: 'Further information will be released in due course on the implementation of the Pillar Two rules in the UAE.'
        },
        second: {
            heading: 'What is meant by “large” multinationals?',
            firstPara: 'A multinational corporation is a corporation that operates in its home country, as well as in other countries through a foreign subsidiaries, branches or other entity forms of presence / registration. Merely earning foreign sourced income from outside its home country without a foreign presence or registration in a foreign country would not make a business a multinational corporation.',
            secondPara: 'In the context of the global minimum effective tax rate as proposed under ‘Pillar Two’ of the OECD Base Erosion and Profit Shifting project, ”large” refers to a multinational corporation that has consolidated global revenues in excess of the UAE Dirham equivalent of EUR 750 million.'
        },
    }

    const ctPartFourArrayFirst = [ctPartFour.first.firstPara, ctPartFour.first.secondPara, ctPartFour.first.thirdPara]

    const ctPartFourArraySecond = [ctPartFour.second.firstPara, ctPartFour.second.secondPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFourFirst">
                {ctPartFour.first.heading}
            </Typography>

            {ctPartFourArrayFirst.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartFour first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFourSecond">
                {ctPartFour.second.heading}
            </Typography>

            {ctPartFourArraySecond.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartFour second end  */}
        </div>
    )
}
