import React from 'react'
import { Typography } from '@mui/material';

export default function SectionSeven() {
    const corporateTax = {
        seventh: {
            heading: '7.Who is a Non-Resident Person?',
            firstPara: 'Non-Resident Persons are juridical persons who are not Resident Persons and: ',
            secondPara: '●have a Permanent Establishment in the UAE; or',
            thirdPara: '●derive State Sourced Income.',
            fourthPara: 'Non-Resident Persons will be subject to Corporate Tax on Taxable Income that is attributable to their Permanent Establishment (which is explained under Section 8). Certain UAE sourced income of a Non-Resident Person that is not attributable to a Permanent Establishment in the UAE will be subject to Withholding Tax at the rate of 0%.'
        },
    }

    const corporateTaxSeventhArray = [corporateTax.seventh.firstPara, corporateTax.seventh.secondPara, corporateTax.seventh.thirdPara, corporateTax.seventh.fourthPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="seventhHeading">
                {corporateTax.seventh.heading}
            </Typography>
            {corporateTaxSeventhArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* seventh para end */}
        </div>
    )
}
