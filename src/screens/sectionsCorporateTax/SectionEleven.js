import React from 'react'
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export default function SectionEleven() {
    const corporateTax = {
        eleventh: {
            heading: '11.What expenses are deductible?',
            firstPara: 'In principle, all legitimate business expenses incurred wholly and exclusively for the purposes of deriving Taxable Income will be deductible, although the timing of the deduction may vary for different types of expenses and the accounting method applied. For capital assets, expenditure would generally be recognized by way of depreciation or amortization deductions over the economic life of the asset or benefit.',
            secondPara: 'Expenditure that has a dual purpose, such as expenses incurred for both personal and business purposes, will need to be apportioned with the relevant portion of the expenditure treated as deductible if incurred wholly and exclusively for the purpose of the taxable person’s business.',
            thirdPara: 'Certain expenses which are deductible under general accounting rules may not be fully deductible for Corporate Tax purposes. These will need to be added back to the Accounting Income for the purposes of determining the Taxable Income. Examples of expenditure that is or may not be deductible (partially or in full) include:'
        },
    }

    const corporateTaxEleventhArray = [corporateTax.eleventh.firstPara, corporateTax.eleventh.secondPara, corporateTax.eleventh.thirdPara]

    return (
        <div>
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
                        <TableCell sx={{ border: '2px solid #000', maxWidth: '160px', margin: '0', textAlign: 'start', position: 'relative', bottom: '12rem', fontSize: '14px' }}>No deduction</TableCell>
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
                                <li style={{ position: 'relative', bottom: '50px', marginLeft: '10px' }}>Interest expenditure</li>
                            </ol>
                        </TableCell>
                        <TableCell sx={{ border: '2px solid #000', maxWidth: '100px' }}>Deduction of net interest expenditure exceeding a certain de minimis threshold upto 30% of the amount of earnings before the deduction of interest, tax, depreciation and amortization (except for certain activities)</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            {/* eleventh para end */}
        </div>
    )
}
