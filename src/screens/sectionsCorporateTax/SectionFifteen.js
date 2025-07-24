import React from 'react'
import { Typography } from '@mui/material';

export default function SectionFifteen() {
    const corporateTax = {
        fifteen: {
            heading: '15.What are Tax Groups, and when can they be formed?',
            firstPara: 'Two or more Taxable Persons who meet certain conditions (see below) can apply to form a “Tax Group” and be treated as a single Taxable Person for Corporate Tax purposes.',
            secondPara: 'To form a Tax Group, both the parent company and its subsidiaries must be resident juridical persons, have the same Financial Year and prepare their financial statements using the same accounting standards.',
            thirdPara: 'Additionally, to form a Tax Group, the parent company must: ',
            fourthPara: '●own at least 95% of the share capital of the subsidiary; ',
            fifthPara: '●hold at least 95% of the voting rights in the subsidiary; and ',
            sixthPara: '●is entitled to at least 95% of the subsidiary’s profits and net assets.',
            seventhPara: 'The ownership, rights and entitlement can be held either directly or indirectly through subsidiaries, but a Tax Group cannot include an Exempt Person or Qualifying Free Zone Person.',
        },
    }

    const corporateTaxFifteennArray = [corporateTax.fifteen.firstPara, corporateTax.fifteen.secondPara, corporateTax.fifteen.thirdPara, corporateTax.fifteen.fourthPara, corporateTax.fifteen.fifthPara, corporateTax.fifteen.sixthPara, corporateTax.fifteen.seventhPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="fifteenthHeading">
                {corporateTax.fifteen.heading}
            </Typography>

            {corporateTaxFifteennArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* fifteen para end */}
        </div>
    )
}
