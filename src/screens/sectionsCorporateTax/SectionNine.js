import React from 'react'
import { Typography } from '@mui/material';

export default function SectionNine() {
    const corporateTax = {
        ninth: {
            heading: '9.What is Corporate Tax imposed on?',
            firstPara: 'Corporate Tax is imposed on Taxable Income earned by a Taxable Person in a Tax Period. Corporate Tax would generally be imposed annually, with the Corporate Tax liability calculated by the Taxable Person on a self-assessment basis. This means that the calculation and payment of Corporate Tax is done through the filing of a Corporate Tax Return with the Federal Tax Authority by the Taxable Person.',
            secondPara: 'The definition of Permanent Establishment in the Corporate Tax Law has been designed on the basis of the definition provided in Article 5 of the OECD Model Tax Convention on IThe starting point for calculating Taxable Income is the Taxable Person’s accounting income (i.e. net profit or loss before tax) as per their financial statements. The Taxable Person will then need to make certain adjustments to determine their Taxable Income for the relevant Tax Period. For example, adjustments to accounting income may need to be made for income that is exempt from Corporate Tax and for expenditure that is wholly or partially non-deductible for Corporate Tax purposes.',
        },
    }

    const corporateTaxNinthArray = [corporateTax.ninth.firstPara, corporateTax.ninth.secondPara, corporateTax.ninth.thirdPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="ninthHeading">
                {corporateTax.ninth.heading}
            </Typography>
            {corporateTaxNinthArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ninth para end */}
        </div>
    )
}
