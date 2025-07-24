import React from 'react'
import { Typography } from '@mui/material';

export default function SectionThree() {
    const corporateTax = {
        third: {
            heading: '3.Who is subject to Corporate Tax?',
            firstPara: 'Corporate Tax is a form of direct tax levied on the net income of corporations and other businesses. ',
            secondParaListOne: '● UAE companies and other juridical persons that are incorporated or effectively managed and controlled in the UAE;',
            secondParaListTwo: '● Natural persons (individuals) who conduct a Business or Business Activity in the UAE as specified in a Cabinet Decision to be issued in due course; and',
            secondParaListThree: '● Non-resident juridical persons (foreign legal entities) that have a Permanent Establishment in the UAE (which is explained under Section 8).',
            thirdPara: 'Juridical persons established in a UAE Free Zone are also within the scope of Corporate Tax as “Taxable Persons” and will need to comply with the requirements set out in the Corporate Tax Law. However, a Free Zone Person that meets the conditions to be considered a Qualifying Free Zone Person can benefit from a Corporate Tax rate of 0% on their Qualifying Income (the conditions are included in Section 14).',
            fourthPara: 'Non-resident persons that do not have a Permanent Establishment in the UAE or that earn UAE sourced income that is not related to their Permanent Establishment may be subject to Withholding Tax (at the rate of 0%). Withholding tax is a form of Corporate Tax collected at source by the payer on behalf of the recipient of the income. Withholding taxes exist in many tax systems and typically apply to the cross-border payment of dividends, interest, royalties and other types of income.'
        },
    }
    const corporateTaxThirdArrayList = [corporateTax.third.secondParaListOne, corporateTax.third.secondParaListOne, corporateTax.third.secondParaListThree]

    const corporateTaxThirdArray = [corporateTax.third.thirdPara, corporateTax.third.fourthPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="thirdHeading">
                {corporateTax.third.heading}
            </Typography>
            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {corporateTax.third.firstPara}
            </Typography>
            {corporateTaxThirdArrayList.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}
            {corporateTaxThirdArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} key={i}>
                    {i}
                </Typography>
            ))}

            {/* third para end */}

        </div>
    )
}
