import React from 'react'
import { Typography } from '@mui/material';

export default function Ct() {

    const ct = {
        first: {
            heading: 'What is CT?',
            firstPara: 'CT is a form of direct tax levied on the net income or profit of corporations and other businesses. CT is sometimes also referred to as “Corporate Income Tax” or “Business Profits Tax” in other jurisdictions.',
        },
        second: {
            heading: 'Why is the UAE introducing CT?',
            firstPara: 'A competitive CT regime based on international best practices is expected to cement the UAE’s position as a leading global hub for business and investment and accelerate the UAE’s development and transformation to achieve its strategic objectives.',
        },
        third: {
            heading: 'Is the UAE the first country to introduce CT?',
            firstPara: 'Most countries in the world have a comprehensive CT regime, including most of the countries in the Middle East.a',
        },
        fourth: {
            heading: 'When will the UAE CT regime become effective? ',
            firstPara: 'The UAE CT regime will become effective for financial years starting on or after 1 June 2023.',
            secondPara: 'Examples',
            thirdPara: '● A business that has a financial year starting on 1 July 2023 and ending on 30 June 2024 will become subject to UAE CT from 1 July 2023 (which is the beginning of the first financial year that starts on or after 1 June 2023)',
            fourthPara: '● A business that has a financial year starting on 1 January 2023 and ending on 31 December 2023 will become subject to UAE CT from 1 January 2024 (which is the beginning of the first financial year that starts on or after 1 June 2023)'
        },
        fifth: {
            heading: 'Who will be subject to UAE CT?',
            firstPara: 'UAE CT applies to juridical persons incorporated in the UAE and juridical persons effectively managed and controlled in the UAE, as well as to foreign juridical persons that have a permanent establishment (see section Foreign persons) in the UAE (see question ‘Who is considered resident for UAE CT purposes?’ under section Scope and rate). Individuals will be subject to CT only if they are engaged in a business or business activity in the UAE, either directly or through an unincorporated partnership or sole proprietorship. A Cabinet Decision will be issued in due course specifying further information on what would bring a natural person within the scope of UAE CT.',
        },
        sixth: {
            heading: 'Will UAE entities owned by UAE or GCC nationals be subject to UAE CT?',
            firstPara: 'Yes – the UAE CT does not differentiate between nationality or residence. Juridical persons that are incorporated or resident in the UAE, or that have a permanent establishment in the UAE, will be subject to UAE CT. This applies irrespective of the residence and nationality of the individual founders or (ultimate) owners of the entity.',
        },
        seventh: {
            heading: 'Will UAE CT be applicable to businesses in each Emirate?',
            firstPara: 'Yes. The UAE CT is a Federal tax and will therefore apply across all the Emirates.',
        },
        eighth: {
            heading: 'Will I have to pay UAE CT alongside Emirate level taxes?',
            firstPara: 'Businesses engaged in the extraction of the UAE’s natural resources and in certain non extractive activities that are subject to Emirate level taxation will be outside the scope of UAE CT, subject to meeting certain conditions. Other businesses may be subject to both Federal CT and Emirate level taxation. Emirate level taxes paid will not be able to be credited against or otherwise reduce the amount of Federal CT payable.',
        },
        ninth: {
            heading: 'Will UAE CT replace VAT in the UAE?',
            firstPara: 'No, CT and VAT are two different types of taxes. Both will continue to apply in the UAE. ',
        },
        tenth: {
            heading: 'Will I have to pay UAE CT alongside VAT in the UAE?',
            firstPara: 'If you are a registered business for VAT, you will have to pay VAT and CT separately. If your business is not VAT registered you may still have to pay CT. '
        },
        eleventh: {
            heading: 'Will I continue to pay service fees to local and Federal Governments now that the UAE has introduced CT?',
            firstPara: 'Yes. Applicable service fees will continue to be payable to the relevant Emirate and Federal Governments. Business set up, licence renewal and other Government fees and charges incurred wholly and exclusively in the ordinary course of business are deductible expenses for UAE CT purposes.',
        },
        twelveth: {
            heading: 'Will UAE CT replace Excise Tax in the UAE? ',
            firstPara: 'No, CT and Excise Tax are two different types of taxes. Both will continue to apply in the UAE.',
        },
        thirteen: {
            heading: 'Will I need to consider the UAE’s international agreements for UAE CT purposes?',
            firstPara: 'In-force International agreements (including international agreements for the avoidance of double taxation) to which the UAE is a party should be considered under the UAE CT regime. In case of a conflict between the Corporate Tax Law and an international agreement with respect to the right to tax a certain item of income, the relevant international agreement may limit the application of UAE CT.',
        },
        fourteen: {
            heading: 'What will be the role of the Federal Tax Authority?',
            firstPara: 'The Federal Tax Authority will be responsible for the administration, collection and enforcement of UAE CT and other federal taxes. For the purpose of the administration, collection and enforcement of CT, the Federal Tax Authority will issue guides, respond to clarifications and provide awareness as required.',
        },
        fifteen: {
            heading: 'What will be the role of the Ministry of Finance? ',
            firstPara: 'The Ministry of Finance will remain the ‘competent authority’ for purposes of bilateral/multilateral tax agreements and the international exchange of information for tax purposes. The Ministry of Finance also has the authority to issue further guidance and implementing regulations for UAE CT and other federal taxes.',
        },
        sixteen: {
            heading: 'What should I be doing to prepare for UAE CT? ',
            firstPara: 'To assess what the UAE CT regime means for your business, as a starting point, you should: ',
        },
    }

    const ctFirst = [ct.fourth.firstPara, ct.fourth.secondPara, ct.fourth.thirdPara, ct.fourth.fourthPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctFirstHeading">
                {ct.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.first.firstPara}
            </Typography>


            {/* first sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctSecondHeading">
                {ct.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.second.firstPara}
            </Typography>

            {/* second sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctThirdHeading">
                {ct.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.third.firstPara}
            </Typography>

            {/* third sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctFourthHeading">
                {ct.fourth.heading}
            </Typography>

            {ctFirst.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* fourth sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctFifthHeading">
                {ct.fifth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.fifth.firstPara}
            </Typography>

            {/* fifth sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctSixthHeading">
                {ct.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.sixth.firstPara}
            </Typography>

            {/* sixth sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctSeventhHeading">
                {ct.seventh.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.seventh.firstPara}
            </Typography>

            {/* seven sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctEighthHeading">
                {ct.eighth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.eighth.firstPara}
            </Typography>

            {/* eighth sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctNinthHeading">
                {ct.ninth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.ninth.firstPara}
            </Typography>

            {/* ninth sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctTenthHeading">
                {ct.tenth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.tenth.firstPara}
            </Typography>

            {/* tenth sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctEleventhHeading">
                {ct.eleventh.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.eleventh.firstPara}
            </Typography>

            {/* eleven sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctTwelvethHeading">
                {ct.twelveth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.twelveth.firstPara}
            </Typography>

            {/* twelve sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctThirteenHeading">
                {ct.thirteen.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.thirteen.firstPara}
            </Typography>

            {/* thirteen sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctFourteenHeading">
                {ct.fourteen.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.fourteen.firstPara}
            </Typography>

            {/* fourteen sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctFifteenHeading">
                {ct.fifteen.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.fifteen.firstPara}
            </Typography>

            {/* fifteen sub end */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctSixteenHeading">
                {ct.sixteen.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ct.sixteen.firstPara}
                <br />
                1. Read the Corporate Tax Law and the supporting information available on the websites of
                the Ministry of Finance and the Federal Tax Authority.
                <br />
                2. Use the available information to determine whether your business will be subject to UAE
                CT and if so, from what date.
                <br />
                3. Understand the requirements for your business under the Corporate Tax Law, including,
                for example:
                <br />
                a. Whether your business needs to register for UAE CT.
                <br />
                b. What is the accounting / Tax Period for your business.
                <br />
                c. By when your business would need to file a UAE CT return.
                <br />
                d. What elections or applications can or should your business make for UAE CT purposes.
                <br />
                e. How UAE CT may impact your business’ obligations and liabilities under contracts with
                customers and suppliers.
                <br />
                f. What financial information and records your business will need to keep for UAE CT
                purposes.
                <br />
                4. Regularly check the websites of the Ministry of Finance and the Federal Tax Authority for
                further information and guidance on the UAE CT regime.
            </Typography>

            {/* sixteen sub end */}
        </div>
    )
}
