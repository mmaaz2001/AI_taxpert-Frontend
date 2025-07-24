import React from 'react'
import { Typography } from '@mui/material';

export default function CtPartTwentieth() {

    const ctPartTwentieth = {
        first: {
            heading: 'Will a group of UAE companies be able to form a Tax Group for UAE CT purposes?',
            firstPara: 'UAE companies can apply to form a Tax Group and be treated as a single taxable person if the UAE parent company (directly or indirectly) holds at least 95% of the share capital and voting rights of each of the companies.',
            secondPara: 'Example: Company A owns, 20% of company B, and 100% of Company C. Company C owns 80% of the shares of Company B. Because Company A indirectly owns 100% of the shares of Company B (80% via Company C), it can form a Tax Group with both Company B and Company C.',
            thirdPara: 'To form a Tax Group, neither the parent company nor any of the subsidiaries can be an exempt person or a Free Zone entity benefitting from the 0% CT rate, and all companies must use the same financial year and prepare their financial statements using the same accounting standards.',
        },
        second: {
            heading: 'Can UAE subsidiaries of a foreign parent company form a Tax Group for UAE CT purposes?',
            firstPara: 'Being (ultimately) owned by a foreign parent company does not preclude UAE subsidiaries from forming a Tax Group, but the UAE subsidiaries must be held by an intermediary UAE parent company that will be the “parent” of the Tax Group for UAE CT purposes.',
        },
        third: {
            heading: 'Can foreign entities be included in a Tax Group?', 
            firstPara: 'No, unless the foreign entity is managed and controlled in the UAE and considered a UAE resident entity for UAE CT purposes. This is because only UAE resident juridical persons can form or be part of a Tax Group.',
        },
        fourth: {
            heading: 'Will the 0% CT rate threshold apply to the Tax Group as a whole?',
            firstPara: 'Yes. The 0% threshold of AED 375,000 (amount to be confirmed in a Cabinet Decision) will apply to the Tax Group as a single taxpayer, irrespective of the number of entities that form part of the Tax Group.',
        },
        fifth: {
            heading: 'Who will be responsible for the filing of the UAE CT and for payment of the UAE CT due once a Tax Group is formed?',
            firstPara: 'Once formed, the Tax Group is treated as a single taxable person, with the parent company responsible for the administration and payment of CT on behalf of the group.',
            secondPara: 'For the period they are group members, the parent company and each subsidiary will be jointly and severally liable for the UAE CT obligations of the Tax Group. This joint and several liability can be limited to one or more named members of the Tax Group, with approval from the Federal Tax Authority.',
        },
        sixth: {
            heading: 'Will the Tax Group need to prepare consolidated financial statements?',
            firstPara: 'Yes. To determine the taxable income of the Tax Group, the parent company will have to consolidate the financial accounts of each subsidiary for the relevant Tax Period, and eliminate transactions between the parent company and each subsidiary group member.',
        },
    }

    const ctPartTwentiethArrayFirst = [ctPartTwentieth.first.firstPara, ctPartTwentieth.first.secondPara, ctPartTwentieth.first.thirdPara]

    const ctPartTwentiethArrayFifth = [ctPartTwentieth.fifth.firstPara, ctPartTwentieth.fifth.secondPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctParttwentiethFirst">
                {ctPartTwentieth.first.heading}
            </Typography>

            {ctPartTwentiethArrayFirst.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartTwentieth first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctParttwentiethSecond">
                {ctPartTwentieth.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwentieth.second.firstPara}
            </Typography>

            {/* ctPartTwentieth second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctParttwentiethThird">
                {ctPartTwentieth.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwentieth.third.firstPara}
            </Typography>

            {/* ctPartTwentieth third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctParttwentiethFourth">
                {ctPartTwentieth.fourth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwentieth.fourth.firstPara}
            </Typography>

            {/* ctPartTwentieth fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctParttwentiethFifth">
                {ctPartTwentieth.fifth.heading}
            </Typography>

            {ctPartTwentiethArrayFifth.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartTwentieth fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctParttwentiethSixth">
                {ctPartTwentieth.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwentieth.sixth.firstPara}
            </Typography>

            {/* ctPartTwentieth sixth end  */}

        </div>
    )
}
