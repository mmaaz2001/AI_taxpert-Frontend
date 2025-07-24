import React from 'react'
import { Typography } from '@mui/material';

export default function SectionThirteen() {
    const corporateTax = {
        thirteen: {
            heading: '13.What is the Withholding Tax rate?',
            firstPara: 'A 0% withholding tax may apply to certain types of UAE sourced income paid to non residents. Because of the 0% rate, in practice, no withholding tax would be due and there will be no withholding tax related registration and filing obligations for UAE businesses or foreign recipients of UAE sourced income.',
            secondPara: 'Withholding tax does not apply to transactions between UAE resident persons'
        },
    }

    const corporateTaxThirteenArray = [corporateTax.thirteen.firstPara, corporateTax.thirteen.secondPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="thirteenthHeading">
                {corporateTax.thirteen.heading}
            </Typography>
            {corporateTaxThirteenArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* thirteen para end */}
        </div>
    )
}
