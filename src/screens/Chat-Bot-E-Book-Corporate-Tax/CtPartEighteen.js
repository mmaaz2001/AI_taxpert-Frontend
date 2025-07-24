import React from 'react'
import { Typography } from '@mui/material';

export default function CtPartEighteen() {

    const ctPartEighteen = {
        first: {
            heading: 'Will the oil and gas sector and other extractive industries be subject to UAE CT?',
            firstPara: 'Businesses engaged in the extraction of the UAE’s natural resources and in the nonextractive aspects of the natural resources value chain that are subject to Emirate-level taxation will be outside the scope of the UAE CT regime, subject to certain conditions and safeguards as specified in Article 7 and Article 8 of the Corporate Tax Law, respectively',
        },
        second: {
            heading: 'Will the banking sector be subject to UAE CT?',
            firstPara: 'Yes. UAE headquartered banks and UAE branches of foreign banks will be subject to UAE CT.',
        },
        third: {
            heading: 'Will the real state sector be subject to UAE CT?',
            firstPara: 'Yes. Businesses engaged in real estate management, construction, development, agency and brokerage activities will be subject to UAE CT.',
        },
        fourth: {
            heading: 'Will the asset management sector be subject to UAE CT?',
            firstPara: 'The asset management and broader financial services sectors will be subject to UAE CT, although investment funds that meet certain conditions can apply to be exempt from UAE CT. Further, under the so-called Investment Manager Exemption, UAE based and regulated fund managers and other investment managers can perform discretionary asset / investment management services without creating a taxable presence in the UAE for their foreign clients.',
        },
        fifth: {
            heading: 'Will charities and other public benefit organisations be subject to UAE CT?',
            firstPara: 'Charities and other public benefit organisations will be exempt from UAE CT, subject to meeting certain conditions and being listed in a Cabinet Decision.',
        },
        sixth: {
            heading: 'How will international airlines and shipping companies be taxed?',
            firstPara: 'Income earned by foreign operators of aircrafts and ships will be exempt from UAE CT in respect of:',
            secondPara: '1. providing international transportation of passengers, livestock, mail, parcels, merchandise or goods by air or by sea;',
            thirdPara: '2. leasing or chartering aircrafts or ships used in international transportation; or',
            fourthPara: '3. leasing or chartering equipment which are integral to the seaworthiness of ships or the airworthiness of aircrafts used in international transportation.',
        },
    }

    const ctPartEighteenArraySixth = [ctPartEighteen.sixth.firstPara, ctPartEighteen.sixth.secondPara, ctPartEighteen.sixth.thirdPara, ctPartEighteen.sixth.fourthPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEighteenFirst">
                {ctPartEighteen.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEighteen.first.firstPara}
            </Typography>

            {/* ctPartEighteen first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEighteenSecond">
                {ctPartEighteen.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEighteen.second.firstPara}
            </Typography>

            {/* ctPartEighteen second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEighteenThird">
                {ctPartEighteen.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEighteen.third.firstPara}
            </Typography>

            {/* ctPartEighteen third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEighteenFourth">
                {ctPartEighteen.fourth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEighteen.fourth.firstPara}
            </Typography>

            {/* ctPartEighteen fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEighteenFifth">
                {ctPartEighteen.fifth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEighteen.fifth.firstPara}
            </Typography>

            {/* ctPartEighteen fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEighteenSixth">
                {ctPartEighteen.sixth.heading}
            </Typography>

            {ctPartEighteenArraySixth.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartEighteen sixth end  */}

        </div>
    )
}
