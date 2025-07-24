import React from 'react'
import { Typography } from '@mui/material';

export default function SectionEight() {
    const corporateTax = {
        eighth: {
            heading: '8.What is a Permanent Establishment?',
            firstPara: 'The concept of Permanent Establishment is an important principle of international tax law used in corporate tax regimes across the world. The main purpose of the Permanent Establishment concept in the UAE Corporate Tax Law is to determine if and when a foreign person has established sufficient presence in the UAE to warrant the business profits of that foreign person to be subject to Corporate Tax.',
            secondPara: 'The definition of Permanent Establishment in the Corporate Tax Law has been designed on the basis of the definition provided in Article 5 of the OECD Model Tax Convention on Income and Capital and the position adopted by the UAE under the Multilateral Instrument to Implement Tax Treaty Related Measures to Prevent Base Erosion and Profit Shifting. This allows foreign persons to use the relevant Commentary of Article 5 of the OECD Model Tax Convention when assessing whether they have a Permanent Establishment or not in the UAE. This assessment should consider the provisions of any bilateral tax agreement between the country of residence of the Non-Resident Person and the UAE.',
        },
    }

    const corporateTaxEighthArray = [corporateTax.eighth.firstPara, corporateTax.eighth.secondPara, corporateTax.eighth.thirdPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="eighthHeading">
                {corporateTax.eighth.heading}
            </Typography>
            {corporateTaxEighthArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* eight para end */}
        </div>
    )
}
