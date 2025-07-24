import React from 'react'
import { Typography } from '@mui/material';

export default function CtPartNine() {

    const ctPartNine = {
        first: {
            heading: 'What UAE CT rates will apply to entities established in a Free Zone?',
            firstPara: 'Entities established in a Free Zone that meet the conditions to benefit from the Free Zone CT regime (“Qualifying Free Zone Persons”) will be subject to UAE CT at the following rates: ',
        },
        second: {
            heading: 'Is the 0% Free Zone CT regime applicable automatically?',
            firstPara: 'A Qualifying Free Zone Person that meets the relevant conditions will be able to benefit from the 0% Free Zone CT regime automatically. However, a Qualifying Free Zone Person can elect not to apply the Free Zone CT regime, but instead be subject to the regular CT regime and rates.',
        },
        third: {
            heading: 'What is a Qualifying Free Zone Person?',
            firstPara: 'To be treated as a “Qualifying Free Zone Person”, the Free Zone entity must:',
        },
        fourth: {
            heading: 'Will a Free Zone entity be required to register and file a UAE CT return?',
            firstPara: 'Yes. All Free Zone entities will be required to register and file a CT return, irrespective of whether they are a Qualifying Free Zone Person or not.',
        },
        fifth: {
            heading: 'Will a different UAE CT treatment apply to entities established in a financial Free Zone?',
            firstPara: 'No. The UAE CT treatment will be the same for all Free Zone entities.',
        },
        sixth: {
            heading: 'Will Free Zone entities be subject to the global minimum tax (OECD, BEPS Pillar 2) rules?',
            firstPara: 'ualifying Free Zone entities that are part of a large multinational group are anticipated to be subject to a different CT rate once the Pillar Two rules are embedded into the UAE CT regime.',
        },
    }

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartNineFirst">
                {ctPartNine.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartNine.first.firstPara}
                <br />
                ● 0% on Qualifying Income.
                <br />
                ● 9% on Taxable Income that does not meet the Qualifying Income definition.
            </Typography>

            {/* ctPartNine first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartNineSecond">
                {ctPartNine.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartNine.second.firstPara}
            </Typography>

            {/* ctPartNine second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartNineThird">
                {ctPartNine.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartNine.third.firstPara}
                <br />
                1. Maintain adequate substance in the UAE;
                <br />
                2. Derive “Qualifying Income” as specified in a Cabinet Decision;
                <br />
                3. Comply with transfer pricing rules and maintain the relevant transfer pricing
                documentation; and
                <br />
                4. Not have made an election to be subject to CT in full.
            </Typography>

            {/* ctPartNine third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartNineFourth">
                {ctPartNine.fourth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartNine.fourth.firstPara}
            </Typography>

            {/* ctPartNine fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartNineFifth">
                {ctPartNine.fifth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartNine.fifth.firstPara}
            </Typography>

            {/* ctPartNine fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartNineSixth">
                {ctPartNine.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartNine.sixth.firstPara}
            </Typography>

            {/* ctPartNine sixth end  */}
        </div>
    )
}
