import React from 'react'
import { Typography } from '@mui/material';

export default function SectionSix() {
    const corporateTax = {
        sixth: {
            heading: '6.Who is a Resident Person?',
            firstPara: 'Companies and other juridical persons that are incorporated or otherwise formed or recognised under the laws of the UAE will automatically be considered a Resident Person for Corporate Tax purposes. This covers juridical persons incorporated in the UAE under either mainland legislation or applicable Free Zone regulations, and would also include juridical persons created by a specific statute (e.g. by a special decree).',
            secondPara: 'Foreign companies and other juridical persons may also be treated as Resident Persons for Corporate Tax purposes where they are effectively managed and controlled in the UAE. This shall be determined with regard to the specific circumstances of the entity and its activities, with a determining factor being where key management and commercial decisions are in substance made.',
            thirdPara: 'Natural persons will be subject to Corporate Tax as a “Resident Person” on income from both domestic and foreign sources, but only insofar as such income is derived from a Business or Business Activity conducted by the natural person in the UAE. Any other income earned by a natural person would not be within the scope of Corporate Tax.'
        },
    }
    const corporateTaxSixthArray = [corporateTax.sixth.firstPara, corporateTax.sixth.secondPara, corporateTax.sixth.thirdPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="sixthHeading">
                {corporateTax.sixth.heading}
            </Typography>
            {corporateTaxSixthArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* sixth para end */}
        </div>
    )
}
