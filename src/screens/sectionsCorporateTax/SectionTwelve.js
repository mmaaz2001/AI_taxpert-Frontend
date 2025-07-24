import React from 'react'
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export default function SectionTwelve() {
    const corporateTax = {
        twelve: {
            heading: '12.What is the Corporate Tax rate?',
            firstPara: 'Corporate Tax will be levied at a headline rate of 9% on Taxable Income exceeding AED 375,000. Taxable Income below this threshold will be subject to a 0% rate of Corporate Tax. '
        },
    }

    return (
        <div>
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
        </div>
    )
}
