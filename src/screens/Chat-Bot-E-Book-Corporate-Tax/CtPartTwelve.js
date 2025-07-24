import React from 'react'
import { Typography} from '@mui/material';

export default function CtPartTwelve() {

    const ctPartTwelve = {
        first: {
            heading: 'What is an investment fund?',
            firstPara: 'An investment fund is an entity whose principal activity is the issuing of investment interests to raise funds or pool investor funds or establish a joint investor fund with the aim of enabling the holder of such an investment interest to benefit from the profits or gains from the entity’s acquisition, holding, management or disposal of investments, in accordance with  the applicable legislation.',
        },
        second: {
            heading: 'Will investment funds be subject to UAE CT?',
            firstPara: 'Investment funds are commonly organised as limited partnerships (as opposed to corporate entities) to ensure tax neutrality for their investors. This tax neutrality follows from the fact that most countries treat limited partnerships as transparent (‘flow through’) for domestic and international tax purposes, which puts investors in the fund in a similar tax position as if they had invested directly in the underlying assets of the fund. Investment funds that are structured as partnerships, unit trusts and other unincorporated vehicles would generally be treated as fiscally transparent “Unincorporated Partnerships” for the purposes of UAE CT.',
            secondPara: 'Investment funds that are structured as corporate entities, including Real Estate Investment Trusts, or partnership funds that apply to be treated as a “Taxable Person” for UAE CT purposes in their own right, can apply to the Federal Tax Authority to be exempt from UAE CT subject to meeting certain requirements.',
        },
        third: {
            heading: 'What is a recognised stock exchange?',
            firstPara: 'A recognised stock exchange includes:',
        },
        fourth: {
            heading: 'Will a UAE based investment fund manager be subject to UAE CT?',
            firstPara: 'Yes. If the investment fund manager is a UAE resident, or if it operates in the UAE through a permanent establishment, the investment fund manager will be subject to UAE CT on the income it earns.',
        },
        fifth: {
            heading: 'For the purpose of benefiting from the CT exemption, are both the investment fund and the fund manager required to be subject to regulatory oversight?',
            firstPara: 'For the investment fund exemption, either the investment fund or the manager of the fund is required to be subject to regulatory oversight, not both.',
        },
        sixth: {
            heading: 'Could a UAE-based investment manager create a UAE taxable presence for its foreign customers?',
            firstPara: 'Under the so-called “Investment Manager Exemption”, regulated UAE investment managers can provide discretionary investment / asset management services to foreign funds and customers without creating a permanent establishment for the foreign investors or the foreign investment fund in the UAE, where certain conditions are met.',
        },
        seventh: {
            heading: 'Could the activities of a UAE-based investment manager result in a foreign investment fund / vehicle to be considered resident in the UAE for UAE CT purposes?',
            firstPara: 'Where the conditions of the Investment Manager Exemption are met, a UAE-based investment manager should not create possible UAE residency for CT purposes for the foreign investment fund / investment vehicle it manages.',
        },
        eighth: {
            heading: 'Can investment holding companies and Special Purpose Vehicles used by an investment fund benefit from an exemption form UAE CT?',
            firstPara: 'WWhere the conditions of the Investment Manager Exemption are met, a UAE-based investment manager should not create possible UAE residency for CT purposes for the foreign investment fund / investment vehicle it manages.',
        },
    }

    const ctPartTwelveArrayFirst = [ctPartTwelve.second.firstPara, ctPartTwelve.second.secondPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwelveFirst">
                {ctPartTwelve.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwelve.first.firstPara}
            </Typography>

            {/* ctPartTwelve first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwelveSecond">
                {ctPartTwelve.second.heading}
            </Typography>

            {ctPartTwelveArrayFirst.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartTwelve second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwelveThird">
                {ctPartTwelve.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwelve.third.firstPara}
                <br />
                ● UAE: Any stock exchange established in the UAE that is licensed and regulated by the
                relevant competent authority (e.g. Nasdaq Dubai, Abu Dhabi Securities Exchange, or Dubai
                Financial Market);
                <br />
                ● Foreign: Any stock exchange established outside the UAE of equal standing to the stock
                exchange in the UAE
            </Typography>

            {/* ctPartTwelve third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwelveFourth">
                {ctPartTwelve.fourth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwelve.fourth.firstPara}
            </Typography>

            {/* ctPartTwelve fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwelveFifth">
                {ctPartTwelve.fifth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwelve.fifth.firstPara}
            </Typography>

            {/* ctPartTwelve fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwelveSixth">
                {ctPartTwelve.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwelve.sixth.firstPara}
            </Typography>

            {/* ctPartTwelve sixth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwelveSeventh">
                {ctPartTwelve.seventh.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwelve.seventh.firstPara}
            </Typography>

            {/* ctPartTwelve seventh end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwelveEighth">
                {ctPartTwelve.eighth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwelve.eighth.firstPara}
            </Typography>

            {/* ctPartTwelve eighth end  */}
        </div>
    )
}
