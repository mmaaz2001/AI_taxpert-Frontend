import React from 'react'
import { Typography, Tooltip } from '@mui/material';

export default function CtPartSeventeen() {

    const ctPartSeventeen = {
        first: {
            heading: 'What is a “Business” or “Business Activity”?',
            firstPara: 'The terms “Business” and “Business Activity” as defined in the Corporate Tax Law identify when the activities of certain persons give rise to a UAE CT liability by considering the person to be a taxable person.',
            secondPara: '“Business” means any economic activity, whether continuous or short term, conducted by any person. It is implied that a business is conducted with a profit motive, and that there is the existence of some system and organisation to the activity conducted. However, a business or business activity for UAE CT purposes does not lose its identity simply because it does not make a profit.',
            thirdPara: 'For the application of the Corporate Tax Law to companies and other juridical persons, all activities conducted and assets used or held will generally be considered activities conducted, and assets used or held, for the purposes of a “Business”.',
            fourthPara: 'Individuals can earn income from wages and salaries, investments or from practising a commercial, industrial or professional activity, either directly or as sole proprietor of a business. For natural persons, a Cabinet Decision will be issued in due course specifying further information on what would bring a natural person within the scope of UAE CT.',
        },
        second: {
            heading: 'Who is exempt from UAE CT?',
            firstPara: 'The following persons are exempt from UAE CT, either automatically or by way of application:',
            secondPara: '1. The UAE Federal and Emirate Governments and their departments, authorities and other public institutions;',
            thirdPara: '2. Wholly Government-owned companies that carry out a mandated activity, and that are listed in a Cabinet Decision;',
            fourthPara: '3. Businesses engaged in the extraction of UAE natural resources and related non-extractive activities that are subject to Emirate-level taxation after meeting certain conditions;',
            fifthPara: '4. Public Benefit Entities that are listed in a Cabinet Decision;',
            sixthPara: '5. Investment Funds that meet the prescribed conditions;',
            seventhPara: '6. Public or private pension or social security funds that meet certain conditions; and',
            eightPara: ' 7. UAE juridical persons that are wholly-owned and controlled by certain exempted entities after meeting certain conditions.',
        },
        third: {
            heading: 'Who is considered resident for UAE CT purposes?',
            firstPara: 'UAE incorporated companies such as LLCs, PSCs, PJSCs, and other UAE juridical persons will be subject to CT as resident persons.',
            secondPara: 'An entity that is incorporated in the UAE will automatically be considered a ‘resident’ person for UAE CT purposes. Equally, an individual who is engaged in a business or business activity in the UAE will also be considered a resident person for UAE CT purposes.',
            thirdPara: 'A foreign company may be treated as a resident person for UAE CT purposes if it is effectively “managed and controlled” in the UAE. All facts and circumstances must be considered in determining where a company is effectively managed and controlled, but a relevant indicator may include the place where the strategic decisions affecting the business are made',
        },
        fourth: {
            heading: 'Who is considered non-resident for UAE CT purposes?',
            firstPara: 'Under the Corporate Tax Law, a juridical person is considered a non-resident if it is incorporated in a foreign country and is effectively managed and controlled outside the UAE. A natural person is considered a non-resident for UAE CT purposes if he or she is not engaged in a taxable business or business activity in the UAE.',
        },
        fifth: {
            heading: 'How are non-residents subject to UAE CT?',
            firstPara: 'Non-resident persons will only be subject to UAE CT on:',
            secondPara: '● income from their Permanent Establishment in the UAE; or',
            thirdPara: ' ● income sourced in the UAE (subject to a 0% withholding tax).'
        },
        sixth: {
            heading: 'How are UAE tax residents subject to UAE CT?',
            firstPara: 'UAE resident juridical persons will be subject to UAE CT on their income source from both the UAE and from abroad, although certain income earned through foreign subsidiaries and income of foreign branches that is subject to tax in another jurisdiction will generally be exempt from UAE CT. Further details of these exemptions are set out under question ‘Will the income of foreign branches of a UAE business be subject to UAE CT?’ under section Branches and question ‘What is the participation exemption regime?’ under section Income exempt from CT.',
            secondPara: 'Where income earned from abroad is not exempt, relief for income taxes paid in the foreign jurisdiction can be taken as a credit against the CT payable in the UAE on the relevant income to prevent double taxation',
        },
        seventh: {
            heading: 'How do you determine taxable income for UAE CT?',
            firstPara: 'The taxable income for a Tax Period will be the accounting net profit (or loss) of the business, after making adjustments for certain items specified in the Corporate Tax Law',
            secondPara: 'The accounting net profit (or loss) of a business is the amount reported in its financial statements prepared in accordance with internationally acceptable accounting standards. Adjustments to the accounting net profit (or loss) will need to be made for the following items:',
            thirdPara: '1. Unrealised gains and losses (subject to the election made regarding the application of the realisation principle);',
            fourthPara: '2. Exempt income such as qualifying dividends and capital gains;',
            fifthPara: '3. Income arising on intra-group transfers;',
            sixthPara: '4. Deductions which are not allowable for tax purposes;',
            seventhPara: '5. Transactions with Related Parties and Connected Persons;',
            eightPara: '6. Transfers of tax losses within the group where relevant;',
            ninthPara: '7. Incentives or tax reliefs; and',
            tenthPara: '8. Any other adjustments as specified by the Minister',
        },
        eight: {
            heading: 'What is a Tax Period?',
            firstPara: 'Given CT is imposed on an annual basis, it is necessary to specify the “Tax Period”. The Tax Period will normally be the Gregorian calendar year (i.e. from 1 January to 31 December), unless the business applies a different 12-month period for preparing its financial statements.',
        },
        ninth: {
            heading: 'What are the UAE CT rates?',
            firstPara: '- Taxpayer',
            secondPara: '- Applicable CT rate',
            thirdPara: '- Individuals and juridical persons',
            fourthPara: '- 0% for taxable income up to and including AED 375,000 (this amount is to be confirmed in a Cabinet Decision)',
            fifthPara: '- 9% for taxable income exceeding AED 375,000 Qualifying Free Zone Persons (see further information below)',
            sixthPara: '- 0% on qualifying income',
            seventhPara: '- 9% on taxable income that does not meet the qualifying income definition',
        },
        tenth: {
            heading: 'If a business has earned taxable income of AED 1 million, what will be the UAE CT amount payable?',
            firstPara: 'The CT liability will be calculated as follows:',
            secondPara: '● Taxable income of AED 375,000 (amount to be confirmed in a Cabinet Decision) subject to CT at 0%: AED 375,000 x 0% = AED 0',
            thirdPara: '● Taxable income exceeding AED 375,000 (amount to be confirmed in a Cabinet Decision) subject to CT at 9%: (AED 1,000,000 - AED 375,000) = AED 625,000 x 9% = AED 56,250',
            fourthPara: 'The UAE CT liability for the Tax Period will be AED 0 + AED 56,250 = AED 56,250',
            fifthPara: 'The final amount of UAE CT payable can be reduced by available tax credits (see section ‘Tax Credits’ section).',
        },
        eleventh: {
            heading: 'Will small businesses be given any UAE CT relief?',
            firstPara: 'In addition to a 0% CT rate for taxable income up to and including AED 375,000, small businesses with revenue below a certain threshold can claim ‘small business relief’ and be treated as having no taxable income during the relevant Tax Period and may be subject to simplified compliance obligations. To claim small business relief, an election must be made to the FTA.',
        },
        twelveth: {
            heading: 'Who can claim small business relief for UAE CT purposes?',
            firstPara: 'Any UAE resident juridical person or individual with revenues below the threshold defined by the Minister and that meets any other conditions that may be set, can claim small business relief.',
        },
        thirteen: {
            heading: 'What is revenue?',
            firstPara: 'Revenue is the gross amount of income derived in a tax period from sales of inventory and properties, services, royalties, interest, premiums, dividends and any other amounts, before deducting any type of costs or expenditure. In the context of income from sales or services, gross income means gross revenues from sales or services without deducting the cost of goods sold or the cost of services.',
        },
    }

    const ctPartSeventeenArrayFirst = [ctPartSeventeen.first.firstPara, ctPartSeventeen.first.secondPara, ctPartSeventeen.first.thirdPara, ctPartSeventeen.first.fourthPara]

    const ctPartSeventeenArraySecond = [ctPartSeventeen.second.firstPara, ctPartSeventeen.second.secondPara, ctPartSeventeen.second.thirdPara, ctPartSeventeen.second.fourthPara, ctPartSeventeen.second.fifthPara, ctPartSeventeen.second.sixthPara, ctPartSeventeen.second.seventhPara, ctPartSeventeen.second.eightPara]

    const ctPartSeventeenArrayThird = [ctPartSeventeen.third.firstPara, ctPartSeventeen.third.secondPara, ctPartSeventeen.third.thirdPara, ctPartSeventeen.third.fourthPara]

    const ctPartSeventeenArrayFifth = [ctPartSeventeen.fifth.firstPara, ctPartSeventeen.fifth.secondPara, ctPartSeventeen.fifth.thirdPara]

    const ctPartSeventeenArraySeventh = [ctPartSeventeen.seventh.firstPara, ctPartSeventeen.seventh.secondPara, ctPartSeventeen.seventh.thirdPara, ctPartSeventeen.seventh.fourthPara, ctPartSeventeen.seventh.fifthPara, ctPartSeventeen.seventh.sixthPara, ctPartSeventeen.seventh.seventhPara, ctPartSeventeen.seventh.eightPara, ctPartSeventeen.seventh.seventhPara, ctPartSeventeen.seventh.eightPara]

    const ctPartSeventeenArrayNinth = [ctPartSeventeen.ninth.firstPara, ctPartSeventeen.ninth.secondPara, ctPartSeventeen.ninth.thirdPara, ctPartSeventeen.ninth.fourthPara, ctPartSeventeen.ninth.fifthPara, ctPartSeventeen.ninth.sixthPara, ctPartSeventeen.ninth.seventhPara]

    const ctPartSeventeenArrayTenth = [ctPartSeventeen.tenth.firstPara, ctPartSeventeen.tenth.secondPara, ctPartSeventeen.tenth.thirdPara, ctPartSeventeen.tenth.fourthPara, ctPartSeventeen.tenth.fifthPara]

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
    const parts = ctPartSeventeen.sixth.firstPara.split('under section Income exempt from CT.');

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.first.heading}
            </Typography>

            {ctPartSeventeenArrayFirst.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartSeventeen first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.second.heading}
            </Typography>

            {ctPartSeventeenArraySecond.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartSeventeen second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.third.heading}
            </Typography>

            {ctPartSeventeenArrayThird.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartSeventeen third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.fourth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSeventeen.fourth.firstPara}
            </Typography>

            {/* ctPartSeventeen fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.fifth.heading}
            </Typography>

            {ctPartSeventeenArrayFifth.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartSeventeen fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '2px', fontSize: '14px' }}>
                <>
                    {parts[0]}
                    <Tooltip title={renderHTMLString(titlePrint)}>
                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>under section Income exempt from CT.</span>
                    </Tooltip>
                    {parts[1]}
                </>
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '2px', fontSize: '14px' }} id="ctPartSixteenFirst">
                {ctPartSeventeen.sixth.secondPara}
            </Typography>

            {/* ctPartSeventeen sixth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.seventh.heading}
            </Typography>

            {ctPartSeventeenArraySeventh.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartSeventeen seventh end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.eight.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSeventeen.eight.firstPara}
            </Typography>

            {/* ctPartSeventeen eight end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.ninth.heading}
            </Typography>

            {ctPartSeventeenArrayNinth.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartSeventeen ninth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.tenth.heading}
            </Typography>

            {ctPartSeventeenArrayTenth.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartSeventeen tenth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.eleventh.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSeventeen.eleventh.firstPara}
            </Typography>

            {/* ctPartSeventeen eleventh end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.twelveth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSeventeen.twelveth.firstPara}
            </Typography>

            {/* ctPartSeventeen twelveth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="firstHeading">
                {ctPartSeventeen.thirteen.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSeventeen.thirteen.firstPara}
            </Typography>

            {/* ctPartSeventeen thirteen end  */}

        </div>
    )
}
