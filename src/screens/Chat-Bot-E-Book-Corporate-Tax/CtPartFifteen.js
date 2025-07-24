import React from 'react'
import {Typography } from '@mui/material';

export default function CtPartFifteen() {

    const ctPartFifteen = {
        first: {
            heading: 'Who is a Natural Person?',
            firstPara: 'The term “Natural Person” in the Corporate Tax Law means an individual.',
        },
        second: {
            heading: 'Will individuals be subject to UAE CT?',
            firstPara: 'Only individuals who engage in a business or business activity as per a Cabinet Decision that will be issued in due course will be subject to UAE CT. Individuals engaged in other activities will generally be outside the scope of the CT regime.',
        },
        third: {
            heading: 'What is the UAE CT treatment of a sole proprietorship or civil company?',
            firstPara: 'For certain types of business activities, natural persons can form a sole proprietorship or civil company. For CT purposes, these entities will be treated as the natural person or persons owning them.',
        },
        fourth: {
            heading: 'Will an individual be subject to UAE CT on business income earned outside the UAE?',
            firstPara: 'The taxable income of a natural person that is engaged in a business in the UAE is all the income that is derived from that business. This would include income earned from outside the UAE insofar as it relates to the business activity conducted in the UAE.',
        },
        fifth: {
            heading: 'What if an individual has multiple business activities that are in the scope of UAE CT?',
            firstPara: 'The individual will file one CT return covering all their business activities that are within the scope of UAE CT.',
        },
        sixth: {
            heading: 'Will an individual’s employment income be subject to UAE CT?',
            firstPara: 'UAE CT will not apply to an individual’s salary and other employment income (whether received from the public or private sector). Employment may include a continuing service relationship where all or most of the income of the individual is derived from one customer, and the service income is essentially remuneration for the natural person’s labour.',
        },
        seventh: {
            heading: 'Will self-employed persons (e.g. freelancers) be subject to UAE CT?',
            firstPara: 'Self-employed persons would only be subject to UAE CT if their activity is a taxable business or business activity as per the Cabinet Decision that will be issued in due course. Even if the self-employed person is considered to be undertaking a taxable business or business activity, no CT would be payable on the first AED 375,000 of net income / profit earned from the activity, and further relief (small business relief) may be available to the selfemployed person and other individual entrepreneurs.',
        },
        eight: {
            heading: 'Will income earned by an individual from bank deposits be subject to UAE CT?',
            firstPara: 'Interest and other personal investment and savings income earned by an individual in their personal capacity should not be subject to UAE CT.',
        },
        ninth: {
            heading: 'Will an individual be subject to UAE CT on investment returns?',
            firstPara: 'UAE and foreign individuals will not be subject to UAE CT on dividends, capital gains and other income earned from owning shares or other securities in their personal capacity',
        },
        tenth: {
            heading: 'Will an individual be subject to UAE CT on income from real estate?',
            firstPara: 'Income earned by an individual from the investment in UAE property in their personal capacity will generally not be subject to UAE CT.',
        },
    }

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFifteenFirst">
                {ctPartFifteen.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFifteen.first.firstPara}
            </Typography>

            {/* ctPartFifteen first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFifteenSecond">
                {ctPartFifteen.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFifteen.second.firstPara}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFifteen.second.firstPara}
            </Typography>

            {/* ctPartFifteen second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFifteenThird">
                {ctPartFifteen.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFifteen.third.firstPara}
            </Typography>

            {/* ctPartFifteen third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFifteenFourth">
                {ctPartFifteen.fourth.heading}
            </Typography>

                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {ctPartFifteen.fourth.firstPara}
                </Typography>

            {/* ctPartFifteen fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFifteenFifth">
                {ctPartFifteen.fifth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFifteen.fifth.firstPara}
            </Typography>

            {/* ctPartFifteen fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFifteenSixth">
                {ctPartFifteen.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFifteen.sixth.firstPara}
            </Typography>

            {/* ctPartFifteen sixth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFifteenSeventh">
                {ctPartFifteen.seventh.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFifteen.seventh.firstPara}
            </Typography>

            {/* ctPartFifteen seventh end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFifteenEighth">
                {ctPartFifteen.eight.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFifteen.eight.firstPara}
            </Typography>

            {/* ctPartFifteen eight end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFifteenNinth">
                {ctPartFifteen.ninth.heading}
            </Typography>

                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {ctPartFifteen.fourth.firstPara}
                </Typography>

            {/* ctPartFifteen ninth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartFifteenTenth">
                {ctPartFifteen.tenth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFifteen.tenth.firstPara}
            </Typography>

            {/* ctPartFifteen tenth end  */}

        </div>
    )
}
