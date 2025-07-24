import React from 'react'
import { Typography} from '@mui/material';

export default function CtPartEight() {

    const ctPartEight = {
        first: {
            heading: 'Will foreign companies and other juridical persons be subject to UAE CT?',
            firstPara: 'Foreign entities that operate in the UAE through a permanent establishment or that are considered resident in the UAE for CT purposes will be subject to UAE CT. Merely earning UAE sourced income would not trigger CT payable or require the foreign entity to register and file for UAE CT.',
        },
        second: {
            heading: 'When will a non-resident person be subject to CT?',
            firstPara: 'A non-resident person will be subject to UAE CT if the non-resident person has a permanent establishment in the UAE or earns income sourced from the UAE (subject to 0% taxation). Income will generally be considered to be sourced from the UAE where it is derived from a UAE resident, a UAE Permanent Establishment, or the income is derived from activities performed or from assets located, capital invested and rights used in the UAE.',
        },
        third: {
            heading: 'When will a foreign company be considered a resident person?',
            firstPara: 'A foreign juridical person may be treated as a UAE resident for CT purposes and subject to UAE CT on its income sourced from both the UAE and abroad if it is effectively managed and controlled in the UAE (see above).',
        },
        fourth: {
            heading: 'Can a foreign individual be subject to UAE CT as a resident person?',
            firstPara: 'Aforeign individual will be subject to UAE CT as a “Resident Person” insofar as he or she is engaged in a business or business activity in the UAE. Being treated as a Resident Person for UAE CT purposes does not automatically mean the foreign individual will be considered resident in the UAE for all other taxes or for the application of a double tax agreement. For individuals, a decision by the Cabinet of Ministers will be issued in due course specifying further information on what would bring a natural person within the charge to Corporate Tax.',
        },
        fifth: {
            heading: 'When will a foreign individual be subject to UAE CT as a non-resident person?',
            firstPara: 'A foreign individual that does not conduct a taxable business or business activity in the UAE (see question ‘Can a foreign individual be subject to UAE CT as a resident person?’ under section Foreign Persons) would generally not be subject to UAE CT. Merely earning UAE sourced income would not trigger CT payable or require the foreign individual to register and file for UAE CT.',
        },
        sixth: {
            heading: 'How do I know if I have a Permanent Establishment in the UAE?',
            firstPara: 'Generally, a foreign person will have a Permanent Establishment in the UAE if:',
        },
        seventh: {
            heading: 'Will the investment in UAE real estate constitute a taxable permanent establishment in the UAE?',
            firstPara: 'A foreign individual that owns property in the UAE in his or her personal capacity would generally not be subject to UAE CT and related compliance obligations. The investment in UAE real estate by a foreign juridical person may give rise to a taxable permanent establishment where the real estate represents a fixed place of business in the UAE through which the business of the foreign person is wholly or partially carried out.',
        },
        eighth: {
            heading: 'What determines whether income is sourced from the UAE?',
            firstPara: 'Income will be considered to be sourced from the UAE, if:',
        },
        ninth: {
            heading: 'Will UAE investment income earned by a foreign investor be subject to UAE CT?',
            firstPara: 'Income from dividends, capital gains, interest, royalties and other investment returns earned by foreign juridical persons or individuals will not be subject to UAE CT, unless such income can be attributed to a permanent establishment in the UAE of the foreign person.',
        },
    }
    
    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEightFirst">
                {ctPartEight.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEight.first.firstPara}
            </Typography>

            {/* ctPartEight First end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEightSecond">
                {ctPartEight.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEight.second.firstPara}
            </Typography>

            {/* ctPartEight second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEightThird">
                {ctPartEight.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEight.third.firstPara}
            </Typography>

            {/* ctPartEight third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEightFourth">
                {ctPartEight.fourth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEight.fourth.firstPara}
            </Typography>

            {/* ctPartEight fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEightFifth">
                {ctPartEight.fifth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEight.fifth.firstPara}
            </Typography>

            {/* ctPartEight fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEightSixth">
                {ctPartEight.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEight.sixth.firstPara}
                <br />
                ● It has a fixed or permanent place in the UAE through which the business of the foreign
                person is carried on; or
                <br />
                ● There is a person who has and habitually exercises an authority to conduct business in
                the UAE on behalf of the foreign person.
                <br />
                A fixed place of business would not be considered a Permanent Establishment if it is used
                solely to store, display or deliver goods or merchandise belonging to the foreign person or
                to conduct any activities that are of a preparatory or auxiliary nature.
                <br />
                A Permanent Establishment would not arise if the person who has and habitually exercises
                an authority to conduct business in the UAE on behalf of the foreign person acts as an
                independent agent.
                <br />
                Where relevant, the application of an international agreement should be taken into
                consideration when determining whether a permanent establishment exists.
            </Typography>

            {/* ctPartEight sixth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEightSeventh">
                {ctPartEight.seventh.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEight.seventh.firstPara}
            </Typography>

            {/* ctPartEight seventh end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEightEighth">
                {ctPartEight.eighth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEight.eighth.firstPara}
                <br />
                ● the income is derived from a UAE resident;
                <br />
                ● the income derived is attributed to a Permanent Establishment in the UAE of a non-UAE
                resident; or
                <br />
                ● the income is derived from activities performed, assets located, capital invested, rights
                used or services performed or benefited from in the UAE.
                <br />
                The Corporate Tax Law includes a non-exhaustive list of income that is considered as being
                sourced in the UAE.
                <br />
                A Cabinet Decision may be issued in due course specifying the types of UAE sourced income
                subject to withholding tax. The UAE withholding tax rate is set at 0%.
            </Typography>

            {/* ctPartEight eighth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartEightNinth">
                {ctPartEight.ninth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartEight.ninth.firstPara}
            </Typography>

            {/* ctPartEight ninth end  */}
        </div>
    )
}
