import React from 'react'
import { Typography, Tooltip } from '@mui/material';

export default function CtPartThree() {

    const ctPartThree = {
        first: {
            heading: 'I am already registered for VAT purposes. Do I have to register for UAE CT?',
            firstPara: 'Yes. Taxpayers will be required to register for UAE CT (and update their details, if required), even if they are already registered for VAT.',
        },
        second: {
            heading: 'What is a self-assessment regime? ',
            firstPara: 'A self-assessment regime is one where taxpayers are responsible for calculating, reporting and paying their taxes.',
        },
        third: {
            heading: 'Who will be required to register for UAE CT purposes?',
            firstPara: 'All taxpayers, as prescribed by the Minister, will be required to register for UAE CT and obtain a Corporate Tax Registration Number. The Federal Tax Authority may also request certain Exempt Persons to register for UAE CT.',
        },
        fourth: {
            heading: 'When do I register for UAE CT? ',
            firstPara: 'Taxpayers are required to register before they file their first CT return.',
        },
        fifth: {
            heading: 'Is there a registration threshold for UAE CT?',
            firstPara: 'There is no registration threshold for UAE CT.',
        },
        sixth: {
            heading: 'How do I register for UAE CT?',
            firstPara: 'Taxpayers will be able to electronically register for UAE CT through the website of the Federal Tax Authority. Further guidance on this will be provided in due course.',
        },
        seventh: {
            heading: 'How often will UAE businesses need to file a UAE CT return?',
            firstPara: 'Only one UAE CT return will need to be filed per Tax Period. The CT return will generally be due within 9 months following the end of the Tax Period. No provisional or advance UAE CT filings will be required.',
        },
        eighth: {
            heading: 'I do not have any income / or my company is dormant, do I have to complete a UAE CT return?',
            firstPara: 'Taxpayers are required to file a CT return, irrespective of the level of income or the status of the company.',
        },
        ninth: {
            heading: 'I did not make a profit for the Tax Period, do I have to complete a UAE CT return?',
            firstPara: 'Taxpayers are required to file a CT return, irrespective of whether they have made a profit or not. Taxpayers with tax losses should ensure they file a CT return in order to ensure that these losses can be used to reduce taxable income of future years.',
        },
        tenth: {
            heading: 'Can I file one UAE CT return for all the companies I own?',
            firstPara: 'If the companies meet the requirements to form a Tax Group (see section ‘Tax Groups’) and their application to form a Tax Group is approved, they can file a single UAE CT return covering all the members of the Tax Group.',
            secondPara: 'Where companies cannot form a Tax Group, they will each be required to file a UAE CT return on a standalone basis.'
        },
        eleventh: {
            heading: 'Will the CT return need to be filed electronically?',
            firstPara: 'UAE CT returns will need to be filed electronically. Further guidance on this will be provided in due course.',
        },
        twelveth: {
            heading: 'When do I need to pay my UAE CT liability?',
            firstPara: 'UAE CT will generally need to be paid before the end of the 9 months following the end of the relevant Tax Period.',
        },
        thirteen: {
            heading: 'How do I pay my UAE CT liability?',
            firstPara: 'Further guidance on the approved payment methods will be provided in due course.',
        },
        fourteen: {
            heading: 'Will there be a requirement to pay UAE CT in advance?',
            firstPara: 'No. UAE businesses will not be required to make advance UAE CT payments. The CT liability for a Tax Period will generally be due for payment by the end of the 9th month following the end of the relevant Tax Period.',
        },
        fifteen: {
            heading: 'Are there any consequences for non-compliance under the UAE CT regime?',
            firstPara: 'Similar to other taxes in the UAE (e.g. VAT), businesses will be subject to penalties for non compliance with the UAE CT regime.',
        },
    }

    const tootlipObj = {
        fifteen: {
            heading: '15.What are Tax Groups, and when can they be formed?',
            firstPara: 'Two or more Taxable Persons who meet certain conditions (see below) can apply to form a “Tax Group” and be treated as a single Taxable Person for Corporate Tax purposes.',
            secondPara: 'To form a Tax Group, both the parent company and its subsidiaries must be resident juridical persons, have the same Financial Year and prepare their financial statements using the same accounting standards.',
            thirdPara: 'Additionally, to form a Tax Group, the parent company must: ',
            fourthPara: '●own at least 95% of the share capital of the subsidiary; ',
            fifthPara: '●hold at least 95% of the voting rights in the subsidiary; and ',
            sixthPara: '●is entitled to at least 95% of the subsidiary’s profits and net assets.',
            seventhPara: 'The ownership, rights and entitlement can be held either directly or indirectly through subsidiaries, but a Tax Group cannot include an Exempt Person or Qualifying Free Zone Person.',
        },
    }

    const tooltipCoporateTaxFifteennArray = [tootlipObj.fifteen.firstPara, tootlipObj.fifteen.secondPara, tootlipObj.fifteen.thirdPara, tootlipObj.fifteen.fourthPara, tootlipObj.fifteen.fifthPara, tootlipObj.fifteen.sixthPara, tootlipObj.fifteen.seventhPara]

    const part = ctPartThree.tenth.firstPara.split('(see section ‘Tax Groups’)');

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeFirst">
                {ctPartThree.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.first.firstPara}
            </Typography>

            {/* ct part three one end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeSecond">
                {ctPartThree.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.second.firstPara}
            </Typography>

            {/* ct part three two end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeThird">
                {ctPartThree.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.third.firstPara}
            </Typography>

            {/* ct part three three end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeFourth">
                {ctPartThree.fourth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.fourth.firstPara}
            </Typography>

            {/* ct part three four end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeFifth">
                {ctPartThree.fifth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.fifth.firstPara}
            </Typography>

            {/* ct part three five end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeSixth">
                {ctPartThree.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.sixth.firstPara}
            </Typography>

            {/* ct part three six end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeSeventh">
                {ctPartThree.seventh.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.seventh.firstPara}
            </Typography>

            {/* ct part three seven end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeEighth">
                {ctPartThree.eighth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.eighth.firstPara}
            </Typography>

            {/* ct part three eight end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeNinth">
                {ctPartThree.ninth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.ninth.firstPara}
            </Typography>

            {/* ct part three nine end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeTenth">
                {ctPartThree.tenth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '2px', fontSize: '14px' }}>
                <>
                    {part[0]}
                    <Tooltip title={
                        <>
                            {tooltipCoporateTaxFifteennArray.map((item, index) => (
                                <Typography key={index} paragraph sx={{ fontWeight: '300', color: 'white', padding: '0', fontSize: '14px' }}>
                                    {item}
                                </Typography>
                            ))}
                        </>
                    }>
                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>(see section ‘Tax Groups’)</span>
                    </Tooltip>
                    {part[1]}
                </>
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.tenth.secondPara}
            </Typography>

            {/* ct part three ten end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeEleventh">
                {ctPartThree.eleventh.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.eleventh.firstPara}
            </Typography>

            {/* ct part three eleven end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeTwelveth">
                {ctPartThree.twelveth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.twelveth.firstPara}
            </Typography>

            {/* ct part three twelve end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeThirteenth">
                {ctPartThree.thirteen.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.thirteen.firstPara}
            </Typography>

            {/* ct part three thirteen end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeFourteenth">
                {ctPartThree.fourteen.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.fourteen.firstPara}
            </Typography>

            {/* ct part three fourteen end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThreeFifteenth">
                {ctPartThree.fifteen.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThree.fifteen.firstPara}
                <br />
                Further information on the UAE CT compliance obligations and applicable penalties will be released in due course.
            </Typography>

            {/* ct part three fifteen end */}
        </div>
    )
}
