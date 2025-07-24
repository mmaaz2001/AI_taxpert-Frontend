import React from 'react'
import { Typography } from '@mui/material';

export default function CtPartSeven() {

    const ctPartSeven = {
        first: {
            heading: 'What records should I keep for UAE CT purposes?',
            firstPara: 'Taxpayers are expected to prepare and maintain financial statements for the purposes of calculating their taxable income, and should maintain all documents and records that support the information in the CT return or in any other filing made with the Authority.',
            secondPara: 'Exempt persons are required to maintain all records to support their exempt status.',
        },
        second: {
            heading: 'How long must I keep my records for UAE CT purposes?',
            firstPara: 'Records and documents should be kept for at least seven years following the end of the relevant Tax Period.',
        },
        third: {
            heading: 'Can I use the consolidated financial statements of the group to prepare the UAE CT return for my UAE business?',
            firstPara: 'No, unless the group only comprises UAE resident entities that have applied to form a Tax Group. Otherwise, each UAE entity that is subject to CT will need to prepare and maintain stand-alone financial statements for UAE CT purposes.',
        },
        fourth: {
            heading: 'Will all entities that are subject to UAE CT be required to have audited financial statements?',
            firstPara: 'No. Only the categories of taxable persons that are listed in a decision issued by the Minister will be required to prepare and maintain audited or certified financial statements.',
        },
        fifth: {
            heading: 'Will the consolidated financial statements of a Tax Group need to be audited for CT purposes?',
            firstPara: 'No. Only the categories of taxable persons that are listed in a decision issued by the Minister will be required to prepare and maintain audited or certified financial statements.',
        },
        sixth: {
            heading: 'Will I need to submit my financial statements to the Federal Tax Authority?',
            firstPara: 'The Federal Tax Authority may request for the financial statements to be submitted alongside the CT tax return, or for the financial statements to be provided upon request.',
        },
        seventh: {
            heading: 'What currency do I use for UAE CT purposes?',
            firstPara: 'A taxpayer’s income, deductions and credits must be measured in the national currency of the UAE (AED), and income derived and expenses incurred in a foreign currency need to be translated into AED.',
            secondPara: 'In principle, taxpayers are expected to translate amounts denominated in a foreign currency on a transaction-by-transaction basis. This means that the receipt of income denominated in foreign currency should be translated into AED at the time the income is derived. Similarly, each deductible expenditure denominated in a foreign currency should be translated into AED at the time the expenditure is incurred.'
        },
        eighth: {
            heading: 'What exchange rate do I use for UAE CT purposes?',
            firstPara: 'For UAE CT purposes, all amounts must be converted to AED based on the applicable exchange rate set by the Central Bank of the UAE at the time the foreign currency transaction is to be translated into the national currency, unless the Federal Tax Authority allows the taxpayer to use an exchange rate that more accurately reflects the taxpayer’s income.',
        },
    }

    const ctPartSevenArrayFirst = [ctPartSeven.first.firstPara, ctPartSeven.first.secondPara]

    const ctPartSevenArraySeven = [ctPartSeven.seventh.firstPara, ctPartSeven.seventh.secondPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSevenFirst">
                {ctPartSeven.first.heading}
            </Typography>

            {ctPartSevenArrayFirst.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartSeven First end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSevenSecond">
                {ctPartSeven.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSeven.second.firstPara}
            </Typography>

            {/* ctPartSeven second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSevenThird">
                {ctPartSeven.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSeven.third.firstPara}
            </Typography>

            {/* ctPartSeven third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSevenFourth">
                {ctPartSeven.fourth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSeven.fourth.firstPara}
            </Typography>

            {/* ctPartSeven fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSevenFifth">
                {ctPartSeven.fifth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSeven.fifth.firstPara}
            </Typography>

            {/* ctPartSeven fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSevenSixth">
                {ctPartSeven.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSeven.sixth.firstPara}
            </Typography>

            {/* ctPartSeven sixth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSevenSeventh">
                {ctPartSeven.seventh.heading}
            </Typography>

            {ctPartSevenArraySeven.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartSeven seventh end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSevenEighth">
                {ctPartSeven.eighth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSeven.eighth.firstPara}
            </Typography>

            {/* ctPartSeven eighth end  */}
        </div>
    )
}
