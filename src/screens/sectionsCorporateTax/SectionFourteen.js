import React from 'react'
import { Typography } from '@mui/material';

export default function SectionFourteen() {
    const corporateTax = {
        fourteen: {
            heading: '14.When can a Free Zone Person be a Qualifying Free Zone Person?',
            firstPara: 'A Free Zone Person that is a Qualifying Free Zone Person can benefit from a preferential Corporate Tax rate of 0% on their “Qualifying Income” only. ',
            secondPara: 'In order to be considered a Qualifying Free Zone Person, the Free Zone Person must:',
            thirdPara: '●maintain adequate substance in the UAE;',
            fourthPara: '●not have made an election to be subject to Corporate Tax at the standard rates; and',
            fifthPara: '●comply with the transfer pricing requirements under the Corporate Tax Law. ',
            sixthPara: 'The Minister may prescribe additional conditions that a Qualifying Free Zone Person must meet.',
            seventhPara: 'If a Qualifying Free Zone Person fails to meet any of the conditions, or makes an election to be subject to the regular Corporate Tax regime, they will be subject to the standard rates of Corporate Tax from the beginning of the Tax Period where they failed to meet the conditions.',
        },
    }

    const corporateTaxFourteennArray = [corporateTax.fourteen.firstPara, corporateTax.fourteen.secondPara, corporateTax.fourteen.thirdPara, corporateTax.fourteen.fourthPara, corporateTax.fourteen.fifthPara, corporateTax.fourteen.sixthPara, corporateTax.fourteen.seventhPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="fourteenthHeading">
                {corporateTax.fourteen.heading}
            </Typography>
            {corporateTaxFourteennArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* fourteen para end */}
        </div>
    )
}
