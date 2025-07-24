import React from 'react'
import { Typography, Tooltip } from '@mui/material';

export default function CtPartSixteen() {

    const ctPartSixteen = {
        first: {
            heading: 'How will the UAE CT regime apply to partnerships?',
            firstPara: 'The Corporate Tax Law makes a distinction between unincorporated and incorporated partnerships.',
            secondPara: '“Unincorporated Partnerships” (as defined in the Corporate Tax Law) are essentially a contractual relationship or arrangement between two or more persons, as opposed to being a distinct juridical person separate from their partners / members. Unincorporated partnerships are treated as ‘transparent’ for UAE CT purposes. This means that an unincorporated partnership is not subject to UAE CT in its own right. Instead, each partner is subject to UAE CT on their share of the income from the business conducted through the partnership.',
            thirdPara: 'Incorporated partnerships include limited liability partnerships, partnerships limited by shares and other types of partnerships where none of the partners have unlimited liability for the partnership’s obligations or other partners` actions. Such partnerships are subject to CT in the same manner as a corporate entity (see section ‘Juridical persons’).',
        },
        second: {
            heading: 'Will each partner in an “unincorporated” partnership be required to register and file a UAE CT return?',
            firstPara: 'Natural persons that are engaged in a business or business activity through an unincorporated partnership are individually subject to UAE CT on their share of the income from the unincorporated partnership. Each partner would be required to register for UAE CT purposes, and comply with the requirements of the Corporate Tax Law.',
            secondtPara: 'The partners in an unincorporated partnership can make an application to the Federal Tax Authority for the unincorporated partnership to be treated as a separate and standalone taxable person for the purposes of UAE CT. If the application is approved, the unincorporated partnership will file a CT return on behalf of the partners in the partnership.',
        },
        third: {
            heading: 'How will foreign partnerships be treated under the Corporate Tax Law?',
            firstPara: 'For UAE CT purposes, a foreign partnership will generally be considered as an Unincorporated Partnership subject to meeting certain conditions, including that the partnership is not subject to tax in the relevant foreign jurisdiction (see question ‘How will the UAE CT regime apply to partnerships?’ under section Partnerships).',
        },
    }
    
    const ctPartSixteenArraySecond = [ctPartSixteen.second.firstPara, ctPartSixteen.second.secondtPara]

    const titlePrint = 'A “juridical person” is an entity established or otherwise recognised under the laws and regulations of the UAE, or under the laws of a foreign jurisdiction, that has a legal personality separate from its founders, owners and directors. Examples of UAE domestic juridical persons include a limited liability company, a foundation, an ‘onshore’ trust, a public or private joint stock company, and other entities that have separate legal personality under the applicable UAE ‘mainland’ legislation or Free Zone regulations. UAE branches of a domestic or a foreign juridical person are regarded as an extension of their “parent” or “head office” and, therefore, are not considered separate juridical persons.'

    const parts = ctPartSixteen.first.thirdPara.split('(see section ‘Juridical persons’)');

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSixteenFirst">
                {ctPartSixteen.first.heading}
            </Typography>
            
            <Typography paragraph sx={{  fontWeight: '300', color: 'black', padding: '2px', fontSize: '14px' }} id="ctPartSixteenFirst">
                {ctPartSixteen.first.firstPara}
            </Typography>
            
            <Typography paragraph sx={{  fontWeight: '300', color: 'black', padding: '2px', fontSize: '14px' }} id="ctPartSixteenFirst">
                {ctPartSixteen.first.secondPara}
            </Typography>
            
            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '2px', fontSize: '14px' }}>
                <>
                    {parts[0]}
                    <Tooltip title={titlePrint}>
                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>(see section ‘Juridical persons’)</span>
                    </Tooltip>
                    {parts[1]}
                </>
            </Typography>

            {/* {ctPartSixteenArrayFirst.map((i, index) => (
                <Tooltip title={titlePrint} arrow sx={{ background: 'black', color: 'white', overflow: 'auto' }}>
                    <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }}>
                        {i}
                    </Typography>
                </Tooltip>
            ))} */}

            {/* ctPartSixteen first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSixteenSecond">
                {ctPartSixteen.second.heading}
            </Typography>

            {ctPartSixteenArraySecond.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartSixteen second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSixteenThird">
                {ctPartSixteen.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSixteen.third.firstPara}
            </Typography>

            {/* ctPartSixteen third end  */}
        </div>
    )
}
