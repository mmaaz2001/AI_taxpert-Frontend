import React from 'react'
import { Typography } from '@mui/material';

export default function CtPartThirteen() {

    const ctPartThirteen = {
        first: {
            heading: 'What is a juridical person?',
            firstPara: 'A “juridical person” is an entity established or otherwise recognised under the laws and regulations of the UAE, or under the laws of a foreign jurisdiction, that has a legal personality separate from its founders, owners and directors. Examples of UAE domestic juridical persons include a limited liability company, a foundation, an ‘onshore’ trust, a public or private joint stock company, and other entities that have separate legal personality under the applicable UAE ‘mainland’ legislation or Free Zone regulations. UAE branches of a domestic or a foreign juridical person are regarded as an extension of their “parent” or “head office” and, therefore, are not considered separate juridical persons.',
        },
        second: {
            heading: 'What does it mean to have a ‘separate legal personality”?',
            firstPara: 'Separate legal personality means that the entity has its own rights, obligations and liabilities. As a consequence, the owners of the juridical person would typically have limited liability when it comes to the debts and obligations of the entity.',
        },
        third: {
            heading: 'How do you determine whether a juridical person has a “Business” that is within the scope of UAE CT?', 
            firstPara: 'All activities undertaken by a juridical person will be deemed “business activities” and are within the scope of UAE CT, unless specifically exempted.',
        },
        fourth: {
            heading: 'Are foreign juridical persons subject to UAE CT in the same way as a UAE resident person?',
            firstPara: 'No (see question ‘Will foreign companies and other juridical persons be subject to UAE CT?’ under section Foreign Persons ), unless the foreign juridical person is “effectively managed and controlled” in the UAE and treated as a resident entity for UAE CT purposes.',
        },
        fifth: {
            heading: 'When is a foreign juridical person considered “effectively managed and controlled” in the UAE?',
            firstPara: 'This will need to be assessed on a case by case basis, and may look at the location where the key decision makers, such as the directors, make the strategic decisions affecting the juridical person.',
        },
        sixth: {
            heading: 'Will UAE holding companies be subject to UAE CT?',
            firstPara: 'UAE holding companies would be subject to UAE CT (at a 9% CT rate or the 0% Free Zone CT rate), depending on whether the holding company is established in a Free Zone or in the mainland UAE, but dividends and capital gains earned from domestic and foreign shareholdings would generally be exempt from CT, subject to certain conditions.',
        },
        seventh: {
            heading: 'Will a sole proprietorship or civil company be treated as a juridical person for CT purposes?',
            firstPara: 'No, but individuals who conduct business in the UAE through a sole proprietorship or civil company may be subject to CT where a relevant business or business activity is undertaken',
        },
    }

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThirteenFirst">
                {ctPartThirteen.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThirteen.first.firstPara}
            </Typography>

            {/* ctPartThirteen first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThirteenSecond">
                {ctPartThirteen.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThirteen.second.firstPara}
            </Typography>

            {/* ctPartThirteen second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThirteenThird">
                {ctPartThirteen.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThirteen.third.firstPara}
            </Typography>

            {/* ctPartThirteen third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThirteenFourth">
                {ctPartThirteen.fourth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThirteen.fourth.firstPara}
            </Typography>

            {/* ctPartThirteen fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThirteenFifth">
                {ctPartThirteen.fifth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThirteen.fifth.firstPara}
            </Typography>

            {/* ctPartThirteen fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThirteenSixth">
                {ctPartThirteen.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThirteen.sixth.firstPara}
            </Typography>

            {/* ctPartThirteen sixth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartThirteenSeventh">
                {ctPartThirteen.seventh.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartThirteen.seventh.firstPara}
            </Typography>

            {/* ctPartThirteen seventh end  */}
        </div>
    )
}
