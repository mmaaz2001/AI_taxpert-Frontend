import React from 'react'
import { Typography } from '@mui/material';

export default function CtPartTwentyTwo() {

    const ctPartTwentyTwo = {
        first: {
            heading: 'Will transfer pricing rules apply to both domestic and cross border transactions?',
            firstPara: 'Yes. Transfer pricing rules apply to UAE businesses that have transactions with Related Parties and Connected Persons, irrespective of whether the Related Parties or Connected Persons are located in the UAE mainland, a Free Zone or in a foreign jurisdiction.',
        },
        second: {
            heading: 'What are transfer pricing rules?',
            firstPara: 'Transfer pricing rules seek to ensure that transactions between Related Parties are carried out on arm’s length terms, as if the transaction was carried out between independent parties. To prevent the manipulation of taxable income, various articles in the Corporate Tax Law require that the consideration of transactions with Related Parties and Connected Persons needs to be determined by reference to their “Market Value”.',
        },
        third: {
            heading: 'Who are Related Parties?', 
            firstPara: 'Generally, Related Parties of an individual refer to the individual`s relatives as well as companies in which the individual, alone or together with their Related Parties, has a controlling ownership interest (typically 50% or more of shares of the company).',
            secondPara: 'Similarly, Related Parties of a company refers to any other companies in which the company, alone or together with their Related Parties, has a controlling ownership interest (typically 50% or more of shares of the company), or that are under greater than 50% common ownership.',
            thirdPara: 'Further detail on the definition of Related Parties can be found in Article 35 of the Corporate Tax Law.',
        },
        fourth: {
            heading: 'Who are Connected Persons?',
            firstPara: 'Connected Persons are different from Related Parties.',
            secondPara: 'A person will be considered “connected” to a business that is within the scope of UAE CT if they are:',
            thirdPara: '1. The owner of the business;',
            fourthPara: '2. A director or officer of the business; or ',
            fifthPara: '3. A Related Party of either of the above.',
        },
        fifth: {
            heading: 'What transfer pricing methodologies can be used to determine the arm`s length value?',
            firstPara: 'Generally, taxpayers are required to apply one or more of the following methodologies to determine the arm’s length values for transfer pricing purposes:',
            secondPara: '1. The comparable uncontrolled price method.',
            thirdPara: '2. The resale price method.',
            fourthPara: '3. The cost-plus method.',
            fifthPara: '4. The transactional net margin method.',
            sixthPara: '5. The transactional profit split method.',
        },
        sixth: {
            heading: 'What documentation should be maintained in respect of transfer pricing?',
            firstPara: 'Businesses will be required to maintain information regarding their transactions with Related Parties and Connected Persons, and certain businesses will be required to submit this information along with their tax return. Businesses that claim small business relief will not have to comply with the transfer pricing documentation rules.',
            secondPara: 'Certain businesses may be requested to maintain a master file and a local file.',
        },
        seventh: {
            heading: 'Do taxpayers need to consider whether intra-group loan arrangements are at arm`s length?',
            firstPara: 'Yes. Transfer pricing rules will apply to all transactions with Related Parties and Connected Persons. Therefore, any loan obtained from (or granted to) a Related Party or Connected Person needs to be at arm’s length (e.g. interest rate, duration, etc.).',
        },
        eighth: {
            heading: 'Would transactions in a Tax Group need to comply with transfer pricing rules?',
            firstPara: 'Transactions between members of a Tax Group are eliminated in the consolidation of the Group’s financial results statements and hence do not need to comply with the transfer pricing rules, unless a member of the Tax Group needs to compute its stand-alone Taxable Income for the purposes of utilising Tax Losses incurred before joining the Tax Group or when leaving a Tax Group.',
        },
    }

    const ctPartTwentyTwoArrayThird = [ctPartTwentyTwo.third.firstPara, ctPartTwentyTwo.third.secondPara, ctPartTwentyTwo.third.thirdPara, ctPartTwentyTwo.third.fourthPara]
    
    const ctPartTwentyTwoArrayFourth = [ctPartTwentyTwo.fourth.firstPara, ctPartTwentyTwo.fourth.secondPara, ctPartTwentyTwo.fourth.thirdPara, ctPartTwentyTwo.fourth.fourthPara, ctPartTwentyTwo.fourth.fifthPara]

    const ctPartTwentyTwoArrayFifth = [ctPartTwentyTwo.fifth.firstPara, ctPartTwentyTwo.fifth.secondPara, ctPartTwentyTwo.fifth.thirdPara, ctPartTwentyTwo.fifth.fourthPara , ctPartTwentyTwo.fifth.fifthPara , ctPartTwentyTwo.fifth.sixthPara]

    const ctPartTwentyTwoArraySixth = [ctPartTwentyTwo.sixth.firstPara, ctPartTwentyTwo.sixth.secondPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentySecondFirst">
                {ctPartTwentyTwo.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwentyTwo.first.firstPara}
            </Typography>

            {/* ctPartTwentyTwo first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentySecondSecond">
                {ctPartTwentyTwo.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwentyTwo.second.firstPara}
            </Typography>

            {/* ctPartTwentyTwo second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentySecondThird">
                {ctPartTwentyTwo.third.heading}
            </Typography>

            {ctPartTwentyTwoArrayThird.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartTwentyTwo third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentySecondFourth">
                {ctPartTwentyTwo.fourth.heading}
            </Typography>

            {ctPartTwentyTwoArrayFourth.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartTwentyTwo fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentySecondFifth">
                {ctPartTwentyTwo.fifth.heading}
            </Typography>

            {ctPartTwentyTwoArrayFifth.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartTwentyTwo fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentySecondSixth">
                {ctPartTwentyTwo.sixth.heading}
            </Typography>

            {ctPartTwentyTwoArraySixth.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartTwentyTwo sixth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentySecondSeventh">
                {ctPartTwentyTwo.seventh.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwentyTwo.seventh.firstPara}
            </Typography>

            {/* ctPartTwentyTwo seventh end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartTwentySecondEighth">
                {ctPartTwentyTwo.eighth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartTwentyTwo.eighth.firstPara}
            </Typography>

            {/* ctPartTwentyTwo eighth end  */}

        </div>
    )
}
