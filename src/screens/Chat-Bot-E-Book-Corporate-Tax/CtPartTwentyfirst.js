import React from 'react'
import { Typography, Tooltip } from '@mui/material';

export default function CtPartTwentyfirst() {

    const ctPartTwentyfirst = {
        first: {
            heading: 'What is taxable income?',
            firstPara: 'ctPartTwentyfirst.fourth.firstPara , ctPartTwentyfirst.fourth.secondPara , ctPartTwentyfirst.fourth.firstPara , ctPartTwentyfirst.fourth.secondPara',
        },
        second: {
            heading: 'What standards must be used to prepare financial statements?',
            firstPara: 'For UAE CT purposes, the financial statements of UAE entities and other businesses should be prepared in accordance with accounting standards accepted in the UAE. International Financial Reporting Standards (IFRS) is the most frequently used accounting standard in the UAE.',
        },
        third: {
            heading: 'Will financial statements need to be prepared on an accruals basis?',
            firstPara: 'Taxpayers should prepare their financial statements, and determine their taxable income on an accruals basis, unless they are permitted to use the cash basis of accounting instead. The Minister may prescribe the instances where a taxpayer can prepare financial statements using the cash basis, which is expected to be available for certain categories of individual entrepreneurs and small businesses.',
        },
        fourth: {
            heading: 'What UAE CT adjustments to the financial statements will be required to calculate taxable income?',
            firstPara: 'The accounting net profit (or loss) would need to be adjusted for the items prescribed in the UAE Corporate Tax Law, including:',
            secondPara: '1. Unrealised gains/losses (subject to the election made regarding the application of the realisation principle);',
            thirdPara: '2. Exempt income such as dividends;',
            fourthPara: '3. Intra-group transfers;',
            fifthPara: '4. Deductions which are not allowable for tax purposes;',
            sixthPara: '5. Adjustments for transactions with Related Parties and Connected Persons;',
            seventhPara: '6. Any incentives or tax reliefs; and',
            eighthPara: '7. Any other adjustment specified by the Minister.',
        },
        fifth: {
            heading: 'What is the UAE CT treatment for any unrealised gains and losses arising from accounting fair value or impairment adjustments?',
            firstPara: 'Where a business prepares their financial statements on an accruals basis, it has the following options in respect of the UAE CT treatment of unrealised accounting gains and losses:',
            secondPara: '●Option 1: The taxpayer can elect to recognise gains and losses on a ‘realisation basis’ for UAE CT purposes for all assets and liabilities - that is, any and all unrealised gains would not be taxable (and conversely, any and all unrealised losses would not be deductible) until they are realised;',
            thirdPara: '●Option 2: The taxpayer can elect to recognise gains and losses on a ‘realisation basis’ for UAE CT purposes for assets and liabilities held on capital account only - that is, only unrealised gains and losses in respect of assets and liabilities held on capital account would not be taxable or deductible, respectively, until they are realised. Unrealised gains and losses arising from assets and liabilities held on revenue account, on the other hand, would continue to be included in taxable income on a current basis.',
            fourthPara: 'Generally, assets and liabilities are considered to be held on capital account when they are not expected to be sold or traded with during the regular course of the business operation.',
        },
        sixth: {
            heading: 'What is the realisation principle, and when is income realised for UAE CT purposes?',
            firstPara: 'As under many other Corporate Tax systems, the UAE CT regime allows taxpayers to apply the realisation principle for determining their taxable income. This means that income will only be taxable, and a deduction would only be able to be taken, if and when a gain or loss is realised. Realisation would happen, for example, when the relevant asset is sold or terminated.',
            secondPara: 'Under the realisation principle, the taxable income for each Tax Period would exclude gains and losses in respect of assets or liabilities that are subject to fair value or impairment accounting.',
        },
        seventh: {
            heading: 'How are capital gains taxed?',
            firstPara: 'No distinction is made between gains arising from the sale of capital assets and those arising from the sale of non-capital (revenue) assets. Capital gains derived from the disposal of assets are included in annual taxable income in the same manner as other income from the business. Capital gains on the sale of shares may be exempt from corporate income tax, subject to meeting certain conditions (see question ‘Are capital gains exempt from UAE CT?’ under section Income exempt from CT).',
        },
    }

    const ctPartTwentyfirstArrayFourth = [ctPartTwentyfirst.fourth.firstPara, ctPartTwentyfirst.fourth.secondPara, ctPartTwentyfirst.fourth.thirdPara, ctPartTwentyfirst.fourth.fourthPara, ctPartTwentyfirst.fourth.fifthPara, ctPartTwentyfirst.fourth.sixthPara, ctPartTwentyfirst.fourth.seventhPara, ctPartTwentyfirst.fourth.eighthPara]

    const ctPartTwentyfirstArrayFifth = [ctPartTwentyfirst.fifth.firstPara, ctPartTwentyfirst.fifth.secondPara, ctPartTwentyfirst.fifth.thirdPara, ctPartTwentyfirst.fifth.fourthPara]

    const ctPartTwentyfirstArraySixth = [ctPartTwentyfirst.sixth.firstPara, ctPartTwentyfirst.sixth.secondPara]

    const titlePrint = `
    <p>The following income is exempt from UAE CT:</p>
    <ol>
        <li>Dividends and other profit distributions received from UAE incorporated or resident legal persons;</li>
        <li>Dividends and other profit distributions received from a Participating Interest in a foreign juridical person (see further information below);</li>
        <li>Certain other income (e.g., capital gains, foreign exchange gains / losses and impairment gains or losses) from a Participating Interest (see further information below);</li>
        <li>Income from a foreign branch or permanent establishment where an election is made to claim the “Foreign Permanent Establishment” exemption; and</li>
        <li>Income earned by non-residents from the operation or leasing of aircrafts or ships in international transportation where certain conditions are met (see further information below).</li>
    </ol>
`;

    function renderHTMLString(htmlString) {
        return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
    }

    const parts = ctPartTwentyfirst.seventh.firstPara.split('under section Income exempt from CT');

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentyFirstFirst">
                {ctPartTwentyfirst.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwentyfirst.first.firstPara}
            </Typography>

            {/* ctPartTwentyfirst first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentyFirstSecond">
                {ctPartTwentyfirst.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwentyfirst.second.firstPara}
            </Typography>

            {/* ctPartTwentyfirst second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentyFirstThird">
                {ctPartTwentyfirst.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwentyfirst.third.firstPara}
            </Typography>

            {/* ctPartTwentyfirst third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentyFirstFourth">
                {ctPartTwentyfirst.fourth.heading}
            </Typography>

            {ctPartTwentyfirstArrayFourth.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartTwentyfirst fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentyFirstFifth">
                {ctPartTwentyfirst.fifth.heading}
            </Typography>

            {ctPartTwentyfirstArrayFifth.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartTwentyfirst fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentyFirstSixth">
                {ctPartTwentyfirst.sixth.heading}
            </Typography>

            {ctPartTwentyfirstArraySixth.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartTwentyfirst sixth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentyFirstSeventh">
                {ctPartTwentyfirst.seventh.heading}
            </Typography>

            {/* <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwentyfirst.seventh.firstPara}
            </Typography> */}
            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '2px', fontSize: '14px' }}>
                <>
                    {parts[0]}
                    <Tooltip title={renderHTMLString(titlePrint)}>
                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>under section Income exempt from CT</span>
                    </Tooltip>
                    {parts[1]}
                </>
            </Typography>

            {/* ctPartTwentyfirst seventh end  */}
        </div>
    )
}
