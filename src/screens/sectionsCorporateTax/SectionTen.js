import React from 'react'
import {Typography} from '@mui/material';

export default function SectionTen() {
    const corporateTax = {
        tenth: {
            heading: '10.What income is exempt?',
            firstPara: 'The Corporate Tax Law also exempts certain types of income from Corporate Tax. This means that a Taxable Persons will not be subject to Corporate Tax on such income and cannot claim a deduction for any related expenditure. Taxable Persons who earn exempt income will remain subject to Corporate Tax on their Taxable Income.',
            secondPara: 'The main purpose of certain income being exempt from Corporate Tax is to prevent double taxation on certain types of income. Specifically, dividends and capital gains earned from domestic and foreign shareholdings will generally be exempt from Corporate Tax. Furthermore, a Resident Person can elect, subject to certain conditions, to not take into account income from a foreign Permanent Establishment for UAE Corporate Tax purposes. ',
        },
    }

    const corporateTaxTenthArray = [corporateTax.tenth.firstPara, corporateTax.tenth.secondPara, corporateTax.tenth.thirdPara]

    return (

        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="tenthHeading">
                {corporateTax.tenth.heading}
            </Typography>
            {corporateTaxTenthArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* tenth para end */}
        </div>
    )
}
