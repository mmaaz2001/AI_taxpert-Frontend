import React from 'react'
import { Typography } from '@mui/material';

export default function CtPartFourteen() {

    const ctPartFourteen = {
        first: {
            heading: 'What are “Tax Losses”?',
            firstPara: 'A loss for CT purposes (“Tax Loss”) would arise when the total deductions a business can claim are greater than the total income that is subject to tax for the relevant Tax Period, resulting in negative taxable income.',
        },
        second: {
            heading: 'Will the UAE CT regime allow prior year tax losses to reduce taxable income?',
            firstPara: 'Tax losses can, subject to certain conditions, be offset against the taxable income of future periods, up to a maximum of 75% of the taxable income in each of those future periods. Any excess (unused) tax losses can be carried forward and used against taxable income of future Tax Periods indefinitely.',
            secondtPara: 'Example',
            thirdPara: 'A taxpayer has taxable income of AED 100,000 and carried forward losses of AED 125,000. It can offset (75% x AED 100,000) = AED 75,000 of its losses carried forward in the relevant Tax Period, reducing its taxable income to AED 25,000.',
            fourthPara: 'The amount of tax losses available for carry forward to subsequent Tax periods would reduce to AED 50,000 (AED 125,000 - AED 75,000). ',
        },
        third: {
            heading: 'Will a change in ownership of the taxable person restrict the ability to use its tax losses?',
            firstPara: 'Tax losses can be carried forward without limitation provided the same person or persons continue to own at least 50% of the entity with the losses. Where there is a greater than 50% change in ownership, tax losses may still be carried forward provided there is no major change in the nature or conduct of the entity`s business.',
        },
        fourth: {
            heading: 'Will a group be able to utilise the tax losses of one group company against the taxable income of another group company?',
            firstPara: 'Tax losses from one UAE group company may be used to offset taxable income of another UAE group company where there is 75% or more common ownership and certain other conditions are met.',
            secondtPara: 'No tax loss transfers will be allowed from companies that are exempt or that benefit from the 0% Free Zone CT regime.'
        },
        fifth: {
            heading: 'What are the conditions for the transfer of tax losses within a group?',
            firstPara: 'The UAE companies must meet the following conditions to transfer an amount of tax losses from one company to another in the same Tax Period:',
        },
    }

    const ctPartFourteenArrayFirst = [ctPartFourteen.second.firstPara, ctPartFourteen.second.secondtPara, ctPartFourteen.second.thirdPara, ctPartFourteen.second.fourthPara]

    const ctPartFourteenArraySecond = [ctPartFourteen.fourth.firstPara, ctPartFourteen.fourth.secondtPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFourteenFirst">
                {ctPartFourteen.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFourteen.first.firstPara}
            </Typography>

            {/* ctPartFourteen first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFourteenSecond">
                {ctPartFourteen.second.heading}
            </Typography>

            {ctPartFourteenArrayFirst.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartFourteen second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFourteenThird">
                {ctPartFourteen.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFourteen.third.firstPara}
            </Typography>

            {/* ctPartFourteen third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFourteenFourth">
                {ctPartFourteen.fourth.heading}
            </Typography>

            {ctPartFourteenArraySecond.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartFourteen fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFourteenFifth">
                {ctPartFourteen.fifth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFourteen.fifth.firstPara}
                <br />
                1. Both companies are UAE resident juridical persons;
                <br />
                2. Either owns 75% or more of the other, or a third party owns 75% or more of both entities and this ownership existed at the start and end of the Tax Period in which the loss was incurred;
                <br />
                3. Neither company is an Exempt Person;
                <br />
                4. Neither company is a Qualifying Free Zone business; and
                <br />
                5. The financial statements must be prepared using the same accounting standards, and using the same financial year.
                <br />

            </Typography>

            {/* ctPartFourteen fifth end  */}

        </div>
    )
}