import React from 'react'
import {Typography } from '@mui/material';

export default function CtPartTen() {

    const ctPartTen = {
        first: {
            heading: 'Will there be any relief available for transfers between group companies?',
            firstPara: 'Yes. Companies that are part of a ‘Qualifying Group’ can transfer assets and liabilities between themselves at their net book value. This means that the transfer can be carried out tax neutrally (i.e. not give rise to a gain or loss for CT purposes).',
        },
        second: {
            heading: 'What is a Qualifying Group?',
            firstPara: 'A Qualifying Group exists where all of the following conditions are met:',
        },
        third: {
            heading: 'Will there be any relief to facilitate mergers, spin-offs and other restructuring transactions?',
            firstPara: 'Yes. The UAE CT regime allows for legal mergers, business mergers, spin-offs and other transfers and restructuring transactions that meet the conditions specified to be carried out without triggering a gain or loss for CT purposes.',
        },
    }

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTenFirst">
                {ctPartTen.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTen.first.firstPara}
            </Typography>

            {/* ctPartTen first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTenSecond">
                {ctPartTen.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTen.second.firstPara}
            </Typography>

            {/* ctPartTen second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTenThird">
                {ctPartTen.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTen.third.firstPara}
                <br />
                ● The members are juridical persons which are UAE residents or non-resident persons that
                have a permanent establishment in the UAE;
                <br />
                ● Either owns 75% or more of the other, or a third party owns 75% or more of both
                entities;
                <br />
                ● Neither member is an Exempt Person;
                <br />
                ● Neither member is a Qualifying Free Zone Person; and
                <br />
                ● Members prepare their financial statements using the same accounting standards, and
                have the same financial year.
                <br />
            </Typography>

            {/* ctPartTen third end  */}
        </div>
    )
}
