import React from 'react';
import { Button, useTheme } from '@mui/material';

const MyButton = (props) => {
    const theme = useTheme();
    const { button, ...rest } = props; // Rest operator to capture remaining props
    return (
        <Button
            onClick={props.onClick}
            variant="contained"
            type='submit'
            color="primary"
            sx={{
                width: 'fit-content',
                background: '#FFB400',
                padding: '5px 26px',
                color: 'black',
                fontWeight: 'bold',
                '&:hover': { background: '#FFB400' },
                [theme.breakpoints.down('md')]: {
                    fontSize: '0.875rem',
                    ...props.widthStyle,
                    ...props.heightStyle,
                    ...props.paddingTopStyle,
                    ...props.paddingBottomStyle,
                    ...props.paddingLeftStyle,
                    ...props.paddingRightStyle,
                    ...props.marginTopStyle,
                    ...props.marginBottomStyle,
                    ...props.marginLeftStyle,
                    ...props.marginRightStyle,
                    ...props.colorStyle,
                }
            }}
            {...rest} // Spread remaining props
        >
            {button}
        </Button>
    );
};

export default MyButton;
