import React from 'react'
import { Typography } from '@mui/material';

export default function SectionEighteen() {
    const corporateTax = {
        eighteen: {
            heading: '18.How to prepare for Corporate Tax?',
            firstPara: '1.Read the Corporate Tax Law and the supporting information available on the websites of the Ministry of Finance and the Federal Tax Authority. ',
            secondPara: '2.Use the available information to determine whether your business will be subject to Corporate Tax and if so, from what date.',
            thirdPara: '3.Understand the requirements for your business under the Corporate Tax Law, including, for example:',
            fourthPara: 'a.Whether and by when your business needs to register for Corporate Tax;',
            fifthPara: 'b.What is the accounting / Tax Period for your business; ',
            sixthPara: 'c.By when your business would need to file a Corporate Tax return;',
            seventhPara: ' d.What elections or applications your business may or should make for Corporate Tax purposes; ',
            eighthPara: 'e.What financial information and records your business will need to keep for Corporate Tax purposes;'
        },
    }

    const corporateTaxEighteenArray = [corporateTax.eighteen.firstPara, corporateTax.eighteen.secondPara, corporateTax.eighteen.thirdPara, corporateTax.eighteen.fourthPara, corporateTax.eighteen.fifthPara, corporateTax.eighteen.sixthPara, corporateTax.eighteen.seventhPara, corporateTax.eighteen.eighthPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="eighteenthHeading">
                {corporateTax.eighteen.heading}
            </Typography>
            {corporateTaxEighteenArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* eighteen para end */}
        </div>
    )
}
