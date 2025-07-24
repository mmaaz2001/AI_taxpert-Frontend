import React from 'react'
import { Typography } from '@mui/material';

export default function CtPartTwentyThree() {

    const ctPartTwentyThree = {
        first: {
            heading: 'What is a “Family Foundation”?',
            firstPara: 'A Family Foundation (as defined in the UAE Corporate Tax Law) is a foundation, trust or similar entity used to protect and manage the assets and wealth of an individual or family.',
            secondPara: 'The principal activity of a Family Foundation would generally be to receive, hold, invest, disburse, or otherwise manage funds and assets associated with savings or investment for the interest of individual beneficiaries or to achieve a charitable purpose. Such activities would typically not constitute a “business” or “business activity” for UAE CT purposes if they were undertaken directly by the founder, beneficiary or any other individual.',
        },
        second: {
            heading: 'Are Family Foundations subject to UAE CT?',
            firstPara: 'Foundations and certain types of trusts are independent juridical persons with separate legal personality, and would therefore prima facie be subject to UAE CT in their own right. However, these types of Family Foundations can apply to be treated as transparent “Unincorporated Partnerships” for UAE CT purposes, resulting in the founder/settlor and the beneficiaries of the trust to remain to be seen as owners of the assets held by the trust. This would generally prevent the income of the foundation or trust from attracting UAE CT.',
            secondPara: 'Other types of trusts (for example, trusts established in the DIFC or ADGM) are a contractual relationship between two or more persons (e.g., the beneficiary, settlor, and trustee) and do not have separate legal personality. These types of trusts will by default be treated as transparent vehicles for UAE CT purposes.',
        },
    }

    const ctPartTwentyThreeArrayFirst = [ctPartTwentyThree.first.firstPara, ctPartTwentyThree.first.secondPara]

    const ctPartTwentyThreeArraySecond = [ctPartTwentyThree.second.firstPara, ctPartTwentyThree.second.secondPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentyThirdFirst">
                {ctPartTwentyThree.first.heading}
            </Typography>

            {ctPartTwentyThreeArrayFirst.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartTwentyThree first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentyThirdSecond">
                {ctPartTwentyThree.second.heading}
            </Typography>

            {ctPartTwentyThreeArraySecond.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartTwentyThree second end  */}

        </div>
    )
}
