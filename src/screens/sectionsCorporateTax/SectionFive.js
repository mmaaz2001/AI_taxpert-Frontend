import React from 'react'
import { Typography } from '@mui/material';

export default function SectionFive() {
    const corporateTax = {
        fifth: {
            heading: '5.How is a Taxable Person subject to Corporate Tax?',
            firstPara: 'In line with the tax regimes of most countries, the Corporate Tax Law taxes income on both a residence and source basis. The applicable basis of taxation depends on the classification of the Taxable Person.',
            secondPara: '●A “Resident Person” is taxed on income derived from both domestic and foreign sources (i.e. a residence basis).',
            thirdPara: '●A “Non-Resident Person” will be taxed only on income derived from sources within the UAE (i.e. a source basis). ',
            fourthPara: 'Residence for Corporate Tax purposes is not determined by where a person resides or is domiciled but instead by specific factors that are set out in the Corporate Tax Law.  If a Person does not satisfy the conditions for being either a Resident or a Non-Resident person then they will not be a Taxable Person and will not therefore be subject to Corporate Tax.'
        },
    }
    const corporateTaxfifthArray = [corporateTax.fifth.firstPara, corporateTax.fifth.secondPara, corporateTax.fifth.thirdPara, corporateTax.fifth.fourthPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', padding: '0', fontWeight: 'bold' }} id="fifthHeading">
                {corporateTax.fifth.heading}
            </Typography>
            {corporateTaxfifthArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* fifth para end */}

        </div>
    )
}
