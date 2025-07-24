import React, { useState } from 'react'
import { Box, Paper, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Tooltip } from '@mui/material';

export default function CoprateTax() {
    const [showTooltip, setShowTooltip] = useState(false);
    const corporateTax = {
        first: {
            heading: '1.Introduction',
            firstPara: 'The Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses (hereinafter referred to as the “Corporate Tax Law”) was issued by His Highness Sheikh Mohamed bin Zayed Al Nahyan, President of the United Arab Emirates (“UAE President”), on 3 October 2022.',
            secondPara: 'The Corporate Tax Law provides the legislative basis for the introduction and implementation of a Federal Corporate Tax (“Corporate Tax”) in the UAE and is effective for financial years starting on or after 1 June 2023.',
            thirdPara: 'The introduction of Corporate Tax is intended to help the UAE achieve its strategic objectives and accelerate its development and transformation. The certainty of a competitive Corporate Tax regime that adheres to international standards, together with the UAE’s extensive network of double tax treaties, will cement the UAE’s position as a leading jurisdiction for business and investment.',
            fourthPara: 'Given the position of the UAE as an international business hub and global financial centre, the UAE Corporate Tax regime builds from best practices globally and incorporates principles that are internationally known and accepted. This ensures that the UAE Corporate Tax regime will be readily understood and is clear in its implications'
        },
        second: {
            heading: '2.What is Corporate Tax?',
            firstPara: 'Corporate Tax is a form of direct tax levied on the net income of corporations and other businesses. ',
            secondPara: 'Corporate Tax is sometimes also referred to as “Corporate Income Tax” or “Business Profits Tax” in other jurisdictions.',
        },
        third: {
            heading: '3.Who is subject to Corporate Tax?',
            firstPara: 'Corporate Tax is a form of direct tax levied on the net income of corporations and other businesses. ',
            secondParaListOne: '● UAE companies and other juridical persons that are incorporated or effectively managed and controlled in the UAE;',
            secondParaListTwo: '● Natural persons (individuals) who conduct a Business or Business Activity in the UAE as specified in a Cabinet Decision to be issued in due course; and',
            secondParaListThree: '● Non-resident juridical persons (foreign legal entities) that have a Permanent Establishment in the UAE (which is explained under Section 8).',
            thirdPara: 'Juridical persons established in a UAE Free Zone are also within the scope of Corporate Tax as “Taxable Persons” and will need to comply with the requirements set out in the Corporate Tax Law. However, a Free Zone Person that meets the conditions to be considered a Qualifying Free Zone Person can benefit from a Corporate Tax rate of 0% on their Qualifying Income (the conditions are included in Section 14).',
            fourthPara: 'Non-resident persons that do not have a Permanent Establishment in the UAE or that earn UAE sourced income that is not related to their Permanent Establishment may be subject to Withholding Tax (at the rate of 0%). Withholding tax is a form of Corporate Tax collected at source by the payer on behalf of the recipient of the income. Withholding taxes exist in many tax systems and typically apply to the cross-border payment of dividends, interest, royalties and other types of income.'
        },
        fourth: {
            heading: '4.Who is exempt from Corporate Tax?',
            firstPara: 'Certain types of businesses or organizations are exempt from Corporate Tax given their importance and contribution to the social fabric and economy of the UAE. These are known as Exempt Persons and include:',
            secondPara: 'In addition to not being subject to Corporate Tax, Government Entities, Government Controlled Entities that are specified in a Cabinet Decision, Extractive Businesses and NonExtractive Natural Resource Businesses may also be exempted from any registration, filing and other compliance obligations imposed by the Corporate Tax Law, unless they engage in an activity which is within the charge of Corporate Tax.'
        },
        fifth: {
            heading: '5.How is a Taxable Person subject to Corporate Tax?',
            firstPara: 'In line with the tax regimes of most countries, the Corporate Tax Law taxes income on both a residence and source basis. The applicable basis of taxation depends on the classification of the Taxable Person.',
            secondPara: '●A “Resident Person” is taxed on income derived from both domestic and foreign sources (i.e. a residence basis).',
            thirdPara: '●A “Non-Resident Person” will be taxed only on income derived from sources within the UAE (i.e. a source basis). ',
            fourthPara: 'Residence for Corporate Tax purposes is not determined by where a person resides or is domiciled but instead by specific factors that are set out in the Corporate Tax Law.  If a Person does not satisfy the conditions for being either a Resident or a Non-Resident person then they will not be a Taxable Person and will not therefore be subject to Corporate Tax.'
        },
        sixth: {
            heading: '6.Who is a Resident Person?',
            firstPara: 'Companies and other juridical persons that are incorporated or otherwise formed or recognised under the laws of the UAE will automatically be considered a Resident Person for Corporate Tax purposes. This covers juridical persons incorporated in the UAE under either mainland legislation or applicable Free Zone regulations, and would also include juridical persons created by a specific statute (e.g. by a special decree).',
            secondPara: 'Foreign companies and other juridical persons may also be treated as Resident Persons for Corporate Tax purposes where they are effectively managed and controlled in the UAE. This shall be determined with regard to the specific circumstances of the entity and its activities, with a determining factor being where key management and commercial decisions are in substance made.',
            thirdPara: 'Natural persons will be subject to Corporate Tax as a “Resident Person” on income from both domestic and foreign sources, but only insofar as such income is derived from a Business or Business Activity conducted by the natural person in the UAE. Any other income earned by a natural person would not be within the scope of Corporate Tax.'
        },
        seventh: {
            heading: '7.Who is a Non-Resident Person?',
            firstPara: 'Non-Resident Persons are juridical persons who are not Resident Persons and: ',
            secondPara: '●have a Permanent Establishment in the UAE; or',
            thirdPara: '●derive State Sourced Income.',
            fourthPara: 'Non-Resident Persons will be subject to Corporate Tax on Taxable Income that is attributable to their Permanent Establishment (which is explained under Section 8). Certain UAE sourced income of a Non-Resident Person that is not attributable to a Permanent Establishment in the UAE will be subject to Withholding Tax at the rate of 0%.'
        },
        eighth: {
            heading: '8.What is a Permanent Establishment?',
            firstPara: 'The concept of Permanent Establishment is an important principle of international tax law used in corporate tax regimes across the world. The main purpose of the Permanent Establishment concept in the UAE Corporate Tax Law is to determine if and when a foreign person has established sufficient presence in the UAE to warrant the business profits of that foreign person to be subject to Corporate Tax.',
            secondPara: 'The definition of Permanent Establishment in the Corporate Tax Law has been designed on the basis of the definition provided in Article 5 of the OECD Model Tax Convention on Income and Capital and the position adopted by the UAE under the Multilateral Instrument to Implement Tax Treaty Related Measures to Prevent Base Erosion and Profit Shifting. This allows foreign persons to use the relevant Commentary of Article 5 of the OECD Model Tax Convention when assessing whether they have a Permanent Establishment or not in the UAE. This assessment should consider the provisions of any bilateral tax agreement between the country of residence of the Non-Resident Person and the UAE.',
        },
        ninth: {
            heading: '9.What is Corporate Tax imposed on?',
            firstPara: 'Corporate Tax is imposed on Taxable Income earned by a Taxable Person in a Tax Period. Corporate Tax would generally be imposed annually, with the Corporate Tax liability calculated by the Taxable Person on a self-assessment basis. This means that the calculation and payment of Corporate Tax is done through the filing of a Corporate Tax Return with the Federal Tax Authority by the Taxable Person.',
            secondPara: 'The definition of Permanent Establishment in the Corporate Tax Law has been designed on the basis of the definition provided in Article 5 of the OECD Model Tax Convention on IThe starting point for calculating Taxable Income is the Taxable Person’s accounting income (i.e. net profit or loss before tax) as per their financial statements. The Taxable Person will then need to make certain adjustments to determine their Taxable Income for the relevant Tax Period. For example, adjustments to accounting income may need to be made for income that is exempt from Corporate Tax and for expenditure that is wholly or partially non-deductible for Corporate Tax purposes.',
        },
        tenth: {
            heading: '10.What income is exempt?',
            firstPara: 'The Corporate Tax Law also exempts certain types of income from Corporate Tax. This means that a Taxable Persons will not be subject to Corporate Tax on such income and cannot claim a deduction for any related expenditure. Taxable Persons who earn exempt income will remain subject to Corporate Tax on their Taxable Income.',
            secondPara: 'The main purpose of certain income being exempt from Corporate Tax is to prevent double taxation on certain types of income. Specifically, dividends and capital gains earned from domestic and foreign shareholdings will generally be exempt from Corporate Tax. Furthermore, a Resident Person can elect, subject to certain conditions, to not take into account income from a foreign Permanent Establishment for UAE Corporate Tax purposes. ',
        },
        eleventh: {
            heading: '11.What expenses are deductible?',
            firstPara: 'In principle, all legitimate business expenses incurred wholly and exclusively for the purposes of deriving Taxable Income will be deductible, although the timing of the deduction may vary for different types of expenses and the accounting method applied. For capital assets, expenditure would generally be recognized by way of depreciation or amortization deductions over the economic life of the asset or benefit.',
            secondPara: 'Expenditure that has a dual purpose, such as expenses incurred for both personal and business purposes, will need to be apportioned with the relevant portion of the expenditure treated as deductible if incurred wholly and exclusively for the purpose of the taxable person’s business.',
            thirdPara: 'Certain expenses which are deductible under general accounting rules may not be fully deductible for Corporate Tax purposes. These will need to be added back to the Accounting Income for the purposes of determining the Taxable Income. Examples of expenditure that is or may not be deductible (partially or in full) include:'
        },
        twelve: {
            heading: '12.What is the Corporate Tax rate?',
            firstPara: 'Corporate Tax will be levied at a headline rate of 9% on Taxable Income exceeding AED 375,000. Taxable Income below this threshold will be subject to a 0% rate of Corporate Tax. '
        },
        thirteen: {
            heading: '13.What is the Withholding Tax rate?',
            firstPara: 'A 0% withholding tax may apply to certain types of UAE sourced income paid to non residents. Because of the 0% rate, in practice, no withholding tax would be due and there will be no withholding tax related registration and filing obligations for UAE businesses or foreign recipients of UAE sourced income.',
            secondPara: 'Withholding tax does not apply to transactions between UAE resident persons'
        },
        fourteen: {
            heading: '14.When can a Free Zone Person be a Qualifying Free Zone Person?',
            firstPara: 'A Free Zone Person that is a Qualifying Free Zone Person can benefit from a preferential Corporate Tax rate of 0% on their “Qualifying Income” only. ',
            secondPara: 'In order to be considered a Qualifying Free Zone Person, the Free Zone Person must:',
            thirdPara: '●maintain adequate substance in the UAE;',
            fourthPara: '●not have made an election to be subject to Corporate Tax at the standard rates; and',
            fifthPara: '●comply with the transfer pricing requirements under the Corporate Tax Law. ',
            sixthPara: 'The Minister may prescribe additional conditions that a Qualifying Free Zone Person must meet.',
            seventhPara: 'If a Qualifying Free Zone Person fails to meet any of the conditions, or makes an election to be subject to the regular Corporate Tax regime, they will be subject to the standard rates of Corporate Tax from the beginning of the Tax Period where they failed to meet the conditions.',
        },
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
        sixteen: {
            heading: '16. How to calculate the Taxable Income of a Tax Group?',
            firstPara: 'To determine the Taxable Income of a Tax Group, the parent company must prepare consolidated financial accounts covering each subsidiary that is a member of the Tax Group for the relevant Tax Period. Transactions between the parent company and each group member and transactions between the group members would be eliminated for the purposes of calculating the Taxable Income of the Tax Group.'
        },
        seventeen: {
            heading: '17.Registering, filing and paying Corporate Tax',
            firstPara: 'All Taxable Persons (including Free Zone Persons) will be required to register for Corporate Tax and obtain a Corporate Tax Registration Number. The Federal Tax Authority may also request certain Exempt Persons to register for Corporate Tax.',
            secondPara: 'Taxable Persons are required to file a Corporate Tax return for each Tax Period within 9 months from the end of the relevant period. The same deadline would generally apply for the payment of any Corporate Tax due in respect of the Tax Period for which a return is filed.',
            thirdPara: 'Illustrated below are examples of the registration, filing and payment deadlines associated for Taxable Persons with a Tax Period (Financial Year) ending on 31 May or 31 December (respectively).  '
        },
        eighteen: {
            heading: '18.How to prepare for Corporate Tax?',
            firstPara: '1.Read the Corporate Tax Law and the supporting information available on the websites of the Ministry of Finance and the Federal Tax Authority. ',
            secondPara: '2.Use the available information to determine whether your business will be subject to Corporate Tax and if so, from what date.',
            thirdPara: '3.Understand the requirements for your business under the Corporate Tax Law, including, for example:',
            fourthPara: 'a.Whether and by when your business needs to register for Corporate Tax;',
            fifthPara: 'b.What is the accounting / Tax Period for your business; ',
            sixthPara: 'c.By when your business would need to file a Corporate Tax return;',
            seventhPara: ' d.What elections or applications your business may or should make for Corporate Tax purposes; ',
            eighthPara: 'e.What financial information and records your business will need to keep for Corporate Tax purposes;'
        },
    }

    const corporateTaxFirstArray = [corporateTax.first.firstPara, corporateTax.first.secondPara, corporateTax.first.thirdPara, corporateTax.first.fourthPara]

    const corporateTaxSecondArray = [corporateTax.second.firstPara, corporateTax.second.secondPara]

    const corporateTaxThirdArrayList = [corporateTax.third.secondParaListOne, corporateTax.third.secondParaListOne, corporateTax.third.secondParaListThree]

    const corporateTaxThirdArray = [corporateTax.third.thirdPara, corporateTax.third.fourthPara]

    const corporateTaxfifthArray = [corporateTax.fifth.firstPara, corporateTax.fifth.secondPara, corporateTax.fifth.thirdPara, corporateTax.fifth.fourthPara]

    const corporateTaxSixthArray = [corporateTax.sixth.firstPara, corporateTax.sixth.secondPara, corporateTax.sixth.thirdPara]

    const corporateTaxSeventhArray = [corporateTax.fifth.firstPara, corporateTax.fifth.secondPara, corporateTax.fifth.thirdPara, corporateTax.fifth.fourthPara]

    const corporateTaxEighthArray = [corporateTax.eighth.firstPara, corporateTax.eighth.secondPara, corporateTax.eighth.thirdPara]

    const corporateTaxNinthArray = [corporateTax.ninth.firstPara, corporateTax.ninth.secondPara, corporateTax.ninth.thirdPara]

    const corporateTaxTenthArray = [corporateTax.tenth.firstPara, corporateTax.tenth.secondPara, corporateTax.tenth.thirdPara]

    const corporateTaxEleventhArray = [corporateTax.eleventh.firstPara, corporateTax.eleventh.secondPara, corporateTax.eleventh.thirdPara]

    const corporateTaxThirteenArray = [corporateTax.thirteen.firstPara, corporateTax.thirteen.secondPara]

    const corporateTaxFourteennArray = [corporateTax.fourteen.firstPara, corporateTax.fourteen.secondPara, corporateTax.fourteen.thirdPara, corporateTax.fourteen.fourthPara, corporateTax.fourteen.fifthPara, corporateTax.fourteen.sixthPara, corporateTax.fourteen.seventhPara]

    const corporateTaxFifteennArray = [corporateTax.fifteen.firstPara, corporateTax.fifteen.secondPara, corporateTax.fifteen.thirdPara, corporateTax.fifteen.fourthPara, corporateTax.fifteen.fifthPara, corporateTax.fifteen.sixthPara, corporateTax.fifteen.seventhPara]

    const corporateTaxSeventeenArray = [corporateTax.seventeen.firstPara, corporateTax.seventeen.secondPara, corporateTax.seventeen.thirdPara]

    const corporateTaxEighteenArray = [corporateTax.eighteen.firstPara, corporateTax.eighteen.secondPara, corporateTax.eighteen.thirdPara, corporateTax.eighteen.fourthPara, corporateTax.eighteen.fifthPara, corporateTax.sixth.sixthPara, corporateTax.eighteen.seventhPara, corporateTax.eighteen.eighthPara]

    const parts = corporateTax.third.secondParaListThree.split('(which is explained under Section 8)');
    
    const part = corporateTax.third.thirdPara.split('(the conditions are included in Section 14).');

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="firstHeading">
                {corporateTax.first.heading}
            </Typography>
            {corporateTaxFirstArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', fontSize: '14px' }} key={i}>
                    {i}
                </Typography>
            ))}

            {/* first para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="secondHeading">
                {corporateTax.second.heading}
            </Typography>
            {corporateTaxSecondArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} key={i}>
                    {i}
                </Typography>
            ))}

            {/* second para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="thirdHeading">
                {corporateTax.third.heading}
            </Typography>
            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {corporateTax.third.firstPara}
            </Typography>
            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {corporateTax.third.secondParaListOne}
            </Typography>
            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {corporateTax.third.secondParaListTwo}
            </Typography>
            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '2px', fontSize: '14px' }}>
                <>
                    {parts[0]}
                    <Tooltip title={corporateTaxEighthArray}>
                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>(which is explained under Section 8)</span>
                    </Tooltip>
                    {parts[1]}
                </>
            </Typography>


            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '2px', fontSize: '14px' }}>
                <>
                    {part[0]}
                    <Tooltip title={corporateTaxFourteennArray}>
                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>(the conditions are included in Section 14).</span>
                    </Tooltip>
                    {part[1]}
                </>
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {corporateTax.third.fourthPara}
            </Typography>
            {/* third para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="fourthHeading">
                {corporateTax.fourth.heading}
            </Typography>
            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {corporateTax.fourth.firstPara}
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: '600', border: '2px solid #000', fontSize: '14px' }}>Automatically exempt</TableCell>
                            <TableCell sx={{ border: '2px solid #000', maxWidth: '150px', fontSize: '14px' }}>
                                <li className='ge' style={{marginRight : '1rem'}}>Government Entities </li>
                                <li className='gen' style={{marginRight : '1rem'}}>Government Controlled Entities that are specified in a Cabinet Decision </li>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Row 1 */}
                        <TableRow>
                            <TableCell sx={{ border: '2px solid #000', maxWidth: '140px', fontSize: '14px' }}>Exempt if notified to the Ministry of Finance (and subject to meeting certain conditions)  </TableCell>
                            <TableCell sx={{ border: '2px solid #000', maxWidth: '160px', fontSize: '14px' }}>
                                <ul>
                                    <li style={{marginLeft : '1rem'}}>Extractive Businesses</li>
                                    <li style={{marginLeft : '1rem'}}>Non-Extractive Natural Resource Businesses</li>
                                </ul>
                            </TableCell>
                        </TableRow>

                        {/* Row 2 */}
                        <TableRow>
                            <TableCell sx={{ border: '2px solid #000', fontWeight: '600', fontSize: '14px' }}>Exempt if listed in a Cabinet Decision </TableCell>
                            <TableCell sx={{ border: '2px solid #000', fontSize: '14px' }}>
                                <li>Qualifying Public Benefit Entities</li>
                            </TableCell>
                        </TableRow>

                        {/* Row 3 */}
                        <TableRow>
                            <TableCell sx={{ border: '2px solid #000', maxWidth: '70px', fontSize: '14px' }}>Exempt if applied to and approved by the Federal Tax Authority (and subject to meeting certain conditions)</TableCell>
                            <TableCell sx={{ border: '2px solid #000', maxWidth: '100px', fontSize: '14px' }}>
                                <li>Public or private pension and social security funds </li>
                                <li>Qualifying Investment Funds </li>
                                <li>Wholly-owned and controlled UAE subsidiaries of a Government Entity, a Government Controlled Entity, a Qualifying Investment Fund, or a public or private pension or social security fund.</li>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '3rem', fontSize: '14px', padding: '0' }} >
                {corporateTax.fourth.secondPara}
            </Typography>

            {/* fourth para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', padding: '0', fontWeight: 'bold' }} id="fifthHeading">
                {corporateTax.fifth.heading}
            </Typography>

            {corporateTaxfifthArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* fifth para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="sixthHeading">
                {corporateTax.sixth.heading}
            </Typography>

            {corporateTaxSixthArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* sixth para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="seventhHeading">
                {corporateTax.seventh.heading}
            </Typography>

            {corporateTaxSeventhArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* seventh para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="eighthHeading">
                {corporateTax.eighth.heading}
            </Typography>

            {corporateTaxEighthArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* eight para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="ninthHeading">
                {corporateTax.ninth.heading}
            </Typography>

            {corporateTaxNinthArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ninth para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="tenthHeading">
                {corporateTax.tenth.heading}
            </Typography>

            {corporateTaxTenthArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* tenth para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="eleventhHeading">
                {corporateTax.eleventh.heading}
            </Typography>

            {corporateTaxEleventhArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: '600', border: '2px solid #000', background: 'yellow', fontSize: '14px' }}>Types Of Expenditures </TableCell>
                        <TableCell sx={{ border: '2px solid #000', fontWeight: '600', background: 'yellow', fontSize: '14px' }}>Limitation to deductibility</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Row 1 */}
                    <TableRow>
                        <TableCell sx={{ border: '2px solid #000', maxWidth: '140px', fontSize: '14px' }}>
                            <ul>
                                <li>Bribes</li>
                                <li>Fines and penalties (other than amounts awarded as compensation for damages or breach of contract). </li>
                                <li>Donations, grants, or gifts made to an entity that is not a Qualifying Public Benefit Entity.</li>
                                <li>Dividends and other profits distributions.</li>
                                <li>Corporate Tax imposed under the Corporate Tax Law</li>
                                <li>Expenditure not incurred wholly and exclusively for the purposes of the Taxable person’s Business.</li>
                                <li>Expenditure incurred in deriving income that is exempt from Corporate Tax.</li>
                            </ul>
                        </TableCell>
                        <TableCell sx={{ border: '2px solid #000', maxWidth: '140px', fontSize: '14px' }}>
                            <Typography variant='body1'>No Deduction</Typography>
                        </TableCell>
                    </TableRow>

                    {/* Row 2 */}
                    <TableRow>
                        <TableCell sx={{ border: '2px solid #000', fontWeight: '600', fontSize: '14px' }}>
                            <ol>
                                <li>lient entertainment expenditure</li>
                            </ol>
                        </TableCell>
                        <TableCell sx={{ border: '2px solid #000' }}>Partial deduction of 50% of the amount of the expenditure</TableCell>
                    </TableRow>

                    {/* Row 3 */}
                    <TableRow>
                        <TableCell sx={{ border: '2px solid #000', maxWidth: '70px', fontSize: '14px' }}>
                            <ol>
                                <li style={{ opacity: '0' }}></li>
                                <br />
                                <li style={{ position: 'relative', bottom: '50px', marginLeft: '10px' }}>Interest expenditure</li>
                            </ol>
                        </TableCell>
                        <TableCell sx={{ border: '2px solid #000', maxWidth: '100px' }}>Deduction of net interest expenditure exceeding a certain de minimis threshold upto 30% of the amount of earnings before the deduction of interest, tax, depreciation and amortization (except for certain activities)</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            {/* eleventh para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '3rem', fontWeight: 'bold' }} id="twelvethHeading">
                {corporateTax.twelve.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {corporateTax.twelve.firstPara} <br />
                Corporate Tax will be charged on Taxable Income as follows:
            </Typography>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: '600', border: '2px solid #000', background: 'yellow', fontSize: '14px' }}>Resident Taxable Persons</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Row 1 */}
                    <TableRow>
                        <TableCell sx={{ border: '2px solid #000', maxWidth: '140px', fontSize: '14px' }}>Taxable Income not exceeding AED 375,000 (this amount is to be confirmed in a Cabinet Decision)</TableCell>
                        <TableCell sx={{ border: '2px solid #000', maxWidth: '160px', fontSize: '14px', margin: '0', textAlign: 'start' }}>0%</TableCell>
                    </TableRow>

                    {/* Row 2 */}
                    <TableRow>
                        <TableCell sx={{ border: '2px solid #000', fontWeight: '600', fontSize: '14px' }}>
                            Taxable income exceeding AED 375,000
                        </TableCell>
                        <TableCell sx={{ border: '2px solid #000', fontSize: '14px' }}>9%</TableCell>
                    </TableRow>

                    {/* Row 3 */}
                    <TableRow>
                        <TableCell sx={{ border: '2px solid #000', maxWidth: '70px', fontWeight: 'bold', background: 'yellow', fontSize: '14px' }}>
                            Qualifying Free Zone Persons
                        </TableCell>
                        <TableCell sx={{ border: '2px solid #000' }}></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ border: '2px solid #000', maxWidth: '140px', fontSize: '14px' }}>Qualifying Income  (this amount is to be confirmed in a Cabinet Decision)</TableCell>
                        <TableCell sx={{ border: '2px solid #000', maxWidth: '160px', margin: '0', textAlign: 'start', fontSize: '14px' }}>0%</TableCell>
                    </TableRow>

                    {/* Row 2 */}
                    <TableRow>
                        <TableCell sx={{ border: '2px solid #000', fontSize: '14px' }}>
                            Taxable Income that does not meet the Qualifying Income Definition
                        </TableCell>
                        <TableCell sx={{ border: '2px solid #000', fontSize: '14px' }}>9%</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            {/* twelve para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="thirteenthHeading">
                {corporateTax.thirteen.heading}
            </Typography>

            {corporateTaxThirteenArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* thirteen para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="fourteenthHeading">
                {corporateTax.fourteen.heading}
            </Typography>

            {corporateTaxFourteennArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* fourteen para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="fifteenthHeading">
                {corporateTax.fifteen.heading}
            </Typography>

            {corporateTaxFifteennArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* fifteen para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="sixteenthHeading">
                {corporateTax.sixteen.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', fontSize: '14px', padding: '0' }} >
                {corporateTax.sixteen.firstPara}
            </Typography>

            {/* sixteen para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="seventeenthHeading">
                {corporateTax.seventeen.heading}
            </Typography>

            {corporateTaxSeventeenArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            <Paper elevation={3} sx={{ padding: '1rem', border: '1px solid black', marginBottom: '1rem' }}>
                <Box
                    sx={{
                        height: '180px',
                        width: '60%',
                        boxSizing: 'border-box',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1rem',
                        background: 'transparent',
                    }}
                >
                </Box>
            </Paper>

            {/* seventeen para end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="eighteenthHeading">
                {corporateTax.eighteen.heading}
            </Typography>

            {corporateTaxEighteenArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* eighteen para end */}
        </div>
    )
}
