import React from 'react'
import { Typography } from '@mui/material';

export default function SectionOne() {
    const sectionOne = {
        first: {
            heading: '1.Introduction',
            firstPara: 'The Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses (hereinafter referred to as the “Corporate Tax Law”) was issued by His Highness Sheikh Mohamed bin Zayed Al Nahyan, President of the United Arab Emirates (“UAE President”), on 3 October 2022.',
            secondPara: 'The Corporate Tax Law provides the legislative basis for the introduction and implementation of a Federal Corporate Tax (“Corporate Tax”) in the UAE and is effective for financial years starting on or after 1 June 2023.',
            thirdPara: 'The introduction of Corporate Tax is intended to help the UAE achieve its strategic objectives and accelerate its development and transformation. The certainty of a competitive Corporate Tax regime that adheres to international standards, together with the UAE’s extensive network of double tax treaties, will cement the UAE’s position as a leading jurisdiction for business and investment.',
            fourthPara: 'Given the position of the UAE as an international business hub and global financial centre, the UAE Corporate Tax regime builds from best practices globally and incorporates principles that are internationally known and accepted. This ensures that the UAE Corporate Tax regime will be readily understood and is clear in its implications'
        },

    }

    const sectionOneFirstArray = [sectionOne.first.firstPara, sectionOne.first.secondPara, sectionOne.first.thirdPara, sectionOne.first.fourthPara]

    return (
        <div style={{ overflow: 'hidden' }}>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="firstHeading">
                {sectionOne.first.heading}
            </Typography>
            {sectionOneFirstArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', fontSize: '14px' }} key={i}>
                    {i}
                </Typography>
            ))}

            {/* first para end */}
        </div>
    )
}
