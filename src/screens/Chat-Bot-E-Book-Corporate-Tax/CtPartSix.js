import React from 'react'
import {  Typography } from '@mui/material';

export default function CtPartSix() {

    const ctPartSix = {
        first: {
            heading: 'What expenditure will be deductible for the purposes of calculating taxable income?',
            firstPara: 'In principle, all legitimate business expenses incurred to derive taxable income will be deductible, although the timing of the deduction may vary for different types of expenses and the accounting method applied. For capital assets, expenditure would generally be recognised by way of depreciation or amortisation deductions over the economic life of the asset or benefit.',
        },
        second: {
            heading: 'What expenditure will be non-deductible for the purposes of calculating taxable income?',
            firstPara: 'Article 33 of the UAE Corporate Tax Law lists certain specific expenses for which no deduction will be allowed, such as bribes, fines and penalties, and no deduction is available for expenditure incurred in deriving income that is exempt from CT or losses that are not connected with or arising out of a taxpayer`s business. Additionally, certain restrictions may apply to the deduction of interest expenditure (see question ‘Will my interest expenditure be fully deductible?’ under section Deductions).',
        },
        third: {
            heading: 'Will my interest expenditure be fully deductible?',
            firstPara: 'The Corporate Tax Law provides for certain restrictions on the deductibility of interest expenditure to discourage excessive debt financing, and to ensure that debt financing used or arising as a result of certain specific intra-group transactions will only be deductible if there is a valid commercial reason for obtaining the loan.',
        },
        fourth: {
            heading: 'Will dividends paid by UAE companies be deductible for CT purposes?',
            firstPara: 'Dividends paid by UAE companies will not be deductible for CT purposes.',
        },
        fifth: {
            heading: 'Will service fees paid to local and Federal Governments be deductible for UAE CT?',
            firstPara: 'Business set up, licence renewal and other Government fees and charges incurred wholly and exclusively in the ordinary course of business are deductible for CT purposes.',
        },
        sixth: {
            heading: 'Will Value Added Tax paid be deductible for UAE CT?',
            firstPara: 'Only irrecoverable input Value Added Tax may be deductible for CT purposes. Otherwise, Value Added Tax charged and Value Added Tax incurred would not impact the calculation of taxable income.',
        },
    }

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSixFirst">
                {ctPartSix.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSix.first.firstPara}
                <br />
                Expenditure that has a dual purpose, such as expenses incurred for both personal and
                business purposes, will need to be apportioned with the relevant portion of the expenditure
                treated as incurred wholly and exclusively for the purpose of the taxable person’s business.
            </Typography>

            {/* ctPartSix First end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSixSecond">
                {ctPartSix.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSix.second.firstPara}
            </Typography>

            {/* ctPartSix Second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSixThird">
                {ctPartSix.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSix.third.firstPara}
                <br />
                General interest deduction limitation rule:
                <br />
                Businesses with net interest expenditure above a threshold to be set by the Minister will be
                allowed to deduct net interest expenditure up to 30% of their earnings before interest, tax,
                depreciation and amortisation (EBITDA), excluding any exempt income. Any net interest
                expenditure which exceeds this limit may be carried forward and utilised in the subsequent
                10 tax periods.
                <br />
                Businesses with net interest expenditure below the threshold to be set by the Minister will
                not be subject to the general interest deduction limitation rule.
                <br />
                The general interest deduction limitation rule will not apply to banks and other finance
                institutions, insurance providers or individuals.
                <br />
                Specific interest deduction limitation rule:
                <br />
                Where a loan is obtained from a Related Party and is used to finance income that is exempt
                from CT, the interest on the Related Party loan will not be deductible unless the taxpayer
                can demonstrate that the main purpose of obtaining the loan and carrying out the
                transaction is not to gain a CT advantage.
            </Typography>

            {/* ctPartSix Third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSixFourth">
                {ctPartSix.fourth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSix.fourth.firstPara}
            </Typography>

            {/* ctPartSix Fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSixFifth">
                {ctPartSix.fifth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSix.fifth.firstPara}
            </Typography>

            {/* ctPartSix Fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: '#2B4C65' }} id="ctPartSixSixth">
                {ctPartSix.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSix.sixth.firstPara}
            </Typography>

            {/* ctPartSix Sixth end  */}
        </div>
    )
}
