import React from 'react'
import { Typography } from '@mui/material';

export default function CtPartEleven() {

    const ctPartEleven = {
        first: {
            heading: 'What income is exempt from UAE CT?',
            firstPara: 'The following income is exempt from UAE CT:',
        },
        second: {
            heading: 'Are all dividends and other profit distributions earned from UAE juridical persons exempt from UAE CT?',
            firstPara: 'Domestic dividends and other profit distributions earned from UAE juridical persons are exempt from UAE CT, irrespective of the level of ownership in the UAE juridical person paying the dividend or profit share. This exemption also applies to dividends received from a UAE juridical person  that benefits from a CT exemption or whose profits are subject to the 0% Free Zone CT rate.',
        },
        third: {
            heading: 'Are all dividends and other profit distributions from foreign juridical persons exempt from UAE CT?',
            firstPara: 'Subject to the participation exemption requirements, dividends and other profit distributions earned from a Participating Interest in a foreign juridical person are exempt from UAE CT. A Participating Interest is a 5% or greater ownership interest in the capital or equity of the foreign juridical person that meets the conditions of the participation exemption regime.',
        },
        fourth: {
            heading: 'Are capital gains exempt from UAE CT?',
            firstPara: 'Under the participation exemption regime, capital gains earned from a Participating Interest are exempt from UAE CT. Also, there is relief from CT for capital gains that may arise on intra-group transfers and reorganisation and restructuring transactions.',
            secondPara: 'Other capital gains would be treated as ordinary income and subject to CT.',
        },
        fifth: {
            heading: 'What is the participation exemption regime?',
            firstPara: 'The background to the participation exemption regime is to prevent double taxation within a group where an underlying group company (that pays the dividend or whose shares are being sold) has already been taxed on its profits.',
            secondPara: 'The Corporate Tax Law fully exempts dividends derived from UAE entities, as well as dividends from foreign subsidiaries that qualify as a “Participation”. A Participation is a juridical person in which the UAE shareholder company owns a 5% or greater ownership interest (a “Participating Interest”) for at least 12 months, and that meets the conditions of the participation exemption regime.',
            thirdPara: 'Similarly, capital gains on the sale of shares in domestic and foreign entities would also be exempt from CT. This exemption is subject to the same minimum ownership threshold, duration and other conditions mentioned above.',
        },
        sixth: {
            heading: 'Can I benefit from a UAE CT exemption if I own less than a 5% shareholding in a company?',
            firstPara: 'There can be instances where a UAE business makes a strategic investment in another company that does not result in a 5% or greater ownership interest, or where the percentage ownership in the Participation falls below the 5% ownership threshold because of events outside of the control of the UAE shareholder company. To address such instances and reduce the administrative burden associated with monitoring the continued compliance with the minimum ownership requirement under the participation exemption regime, the Minister may prescribe a certain minimum acquisition cost / value above which the ownership interest in another juridical person is deemed to be a qualifying “Participation”, and the income from this investment can benefit from the participation exemption.',
        },
    }

    const ctPartElevenArrayFirst = [ctPartEleven.fourth.firstPara, ctPartEleven.fourth.secondPara]

    const ctPartElevenArraySecond = [ctPartEleven.fifth.firstPara, ctPartEleven.fifth.secondPara, ctPartEleven.fifth.thirdPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartElevenFirst">
                {ctPartEleven.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEleven.first.firstPara}
                <br />
                1. Dividends and other profit distributions received from UAE incorporated or resident legal
                persons;
                <br />
                2. Dividends and other profit distributions received from a Participating Interest in a
                foreign juridical person (see further information below);
                <br />
                3. Certain other income (e.g., capital gains, foreign exchange gains / losses and impairment
                gains or losses) from a Participating Interest (see further information below);
                <br />
                4. Income from a foreign branch or permanent establishment where an election is made to
                claim the “Foreign Permanent Establishment” exemption; and
                <br />
                5. Income earned by non-residents from the operation or leasing of aircrafts or ships in
                international transportation where certain conditions are met (see further information
                below).
            </Typography>

            {/* ctPartEleven first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartElevenSecond">
                {ctPartEleven.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEleven.second.firstPara}
            </Typography>

            {/* ctPartEleven second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartElevenThird">
                {ctPartEleven.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEleven.third.firstPara}
            </Typography>

            {/* ctPartEleven third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartElevenFourth">
                {ctPartEleven.fourth.heading}
            </Typography>

            {ctPartElevenArrayFirst.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartEleven fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartElevenFifth">
                {ctPartEleven.fifth.heading}
            </Typography>

            {ctPartElevenArraySecond.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartEleven fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartElevenSixth">
                {ctPartEleven.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEleven.sixth.firstPara}
            </Typography>

            {/* ctPartEleven sixth end  */}
        </div>
    )
}
