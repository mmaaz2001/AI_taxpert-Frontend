import React from 'react'
import { Paper, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export default function SectionFour() {
    const corporateTax = {
        fourth: {
            heading: '4.Who is exempt from Corporate Tax?',
            firstPara: 'Certain types of businesses or organizations are exempt from Corporate Tax given their importance and contribution to the social fabric and economy of the UAE. These are known as Exempt Persons and include:',
            secondPara: 'In addition to not being subject to Corporate Tax, Government Entities, Government Controlled Entities that are specified in a Cabinet Decision, Extractive Businesses and NonExtractive Natural Resource Businesses may also be exempted from any registration, filing and other compliance obligations imposed by the Corporate Tax Law, unless they engage in an activity which is within the charge of Corporate Tax.'
        },
    }

    return (
        <div>
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
                                <li>Government Entities </li>
                                <li>Government Controlled Entities that are specified in a Cabinet Decision </li>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Row 1 */}
                        <TableRow>
                            <TableCell sx={{ border: '2px solid #000', maxWidth: '140px', fontSize: '14px' }}>Exempt if notified to the Ministry of Finance (and subject to meeting certain conditions)  </TableCell>
                            <TableCell sx={{ border: '2px solid #000', maxWidth: '160px', fontSize: '14px' }}>
                                <ul>
                                    <li>Extractive Businesses</li>
                                    <li>Non-Extractive Natural Resource Businesses</li>
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
        </div>
    )
}
