import React from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export default function LawBookIndexPage() {
    return (
        <div style={{ overflowX: 'auto' ,}}>
            <Table>
                <TableHead>
                    <TableRow sx={{ background: '#F5F6F1' }}>
                        <TableCell style={{ padding : '0' ,textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>Section</TableCell>
                        <TableCell style={{ padding : '0' , fontWeight: 'bold', fontSize: '18px', textAlign: 'center' }}>TITLE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#firstHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Introduction</a>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ background: '#F5F6F1' }}>
                        <TableCell>2</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#secondHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is Corporate Tax?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#thirdHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who is subject to Corporate Tax?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ background: '#F5F6F1' }}>
                        <TableCell>4</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#fourthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who is exempt from Corporate Tax?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#fifthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How is a Taxable Person subject to Corporate Tax?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ background: '#F5F6F1' }}>
                        <TableCell>6</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#sixthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who is a Resident Person?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>7</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#seventhHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who is a Non-Resident Person?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ background: '#F5F6F1' }}>
                        <TableCell>8</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#eightHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is a Permanent Establishment?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>9</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#ninthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is Corporate Tax imposed on?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ background: '#F5F6F1' }}>
                        <TableCell>10</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#tenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What income is exempt?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>11</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#eleventhHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What expenses are deductible?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ background: '#F5F6F1' }}>
                        <TableCell>12</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#twelvethHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is the Corporate Tax rate?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>13</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#thirteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is the Withholding Tax rate?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ background: '#F5F6F1' }}>
                        <TableCell>14</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#fourteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>When can a Free Zone Person be a Qualifying Free Zone Person?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>15</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#fifteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What are Tax Groups, and when can they be formed?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ background: '#F5F6F1' }}>
                        <TableCell>16</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#sixteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How to calculate the Taxable Income of a Tax Group?</a>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>17</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#seventeenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Registering, filing and paying Corporate Tax</a>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ background: '#F5F6F1' }}>
                        <TableCell>18</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                            <a href='#eighteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How to prepare for Corporate Tax?</a>
                        </TableCell>
                    </TableRow>

                    {/* ============================= ctPart twentyThird End=========================== */}

                </TableBody>
            </Table>
        </div>
    )
}
