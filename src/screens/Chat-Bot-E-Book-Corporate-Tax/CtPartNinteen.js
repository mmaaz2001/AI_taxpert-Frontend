import React from 'react'
import { Paper, Typography} from '@mui/material';

export default function CtPartNinteen() {

    const ctPartNinteen = {
        first: {
            heading: 'What is withholding tax?',
            firstPara: 'Withholding tax is a form of Corporate Tax collected at source by the payer on behalf of the recipient of the income. Withholding taxes exist in many tax systems and typically apply to the cross-border payment of dividends, interest, royalties and other types of income.',
        },
        second: {
            heading: 'Does the UAE CT regime have withholding tax?',
            firstPara: 'A 0% withholding tax may apply to certain types of UAE sourced income paid to nonresidents. Because of the 0% rate, in practice, no withholding tax would be due and there will be no withholding tax related registration and filing obligations for UAE businesses or foreign recipients of UAE sourced income.',
            secondPara: 'Withholding tax does not apply to transactions between UAE resident persons.',
        },
        third: {
            heading: 'Is a credit available for foreign tax paid on income that is also subject to UAE CT?',
            firstPara: 'Yes. Foreign tax paid on income that is also subject to UAE CT can be deducted as a foreign tax credit from the UAE CT payable. The maximum foreign tax credit is the lower of the foreign tax paid and the UAE CT payable on the relevant income. Any excess foreign tax credit cannot be carried forward or back to a different Tax Period.',
        },
        fourth: {
            heading: 'What foreign taxes can be credited against UAE CT?',
            firstPara: 'Withholding tax and other forms of foreign taxes on income or profits can be offset against the UAE CT liability, subject to any conditions as may be set out in an applicable agreement or treaty made between the UAE and the foreign country or territory.',
        },
    }

    const ctPartNinteenArraySecond = [ctPartNinteen.second.firstPara, ctPartNinteen.second.secondPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartNinteenFirst">
                {ctPartNinteen.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartNinteen.first.firstPara}
            </Typography>

            {/* ctPartNinteen first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartNinteenSecond">
                {ctPartNinteen.second.heading}
            </Typography>

            {ctPartNinteenArraySecond.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartNinteen second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartNinteenThird">
                {ctPartNinteen.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartNinteen.third.firstPara}
            </Typography>

            {/* ctPartNinteen third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartNinteenFourth">
                {ctPartNinteen.fourth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartNinteen.fourth.firstPara}
            </Typography>

            {/* ctPartNinteen fourth end  */}

        </div>
    )
}
