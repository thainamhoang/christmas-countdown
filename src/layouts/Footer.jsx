import React, { useRef, useEffect, useContext } from 'react';

import Typography from '@mui/material/Typography';
import Context from '@components/Context';

import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import colors from '@colors';
import { deepMemo } from '@hooks';

const theme = createTheme();

const useStyles = makeStyles({
    root: {
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(1),
        cursor: 'pointer',
    },
    footer: {
        color: colors.green_dark,
    },
    line: {
        color: colors.green_dark,
        backgroundColor: colors.green_dark,
        height: 0.5,
    },
});

const Footer = () => {
    const classes = useStyles();
    const footerRef = useRef(null);
    const { updateContextValue } = useContext(Context);

    useEffect(() => {
        updateContextValue({
            dHeight: footerRef?.current?.getBoundingClientRect?.()?.bottom,
        });
    }, []);

    return (
        <footer className={classes.root} ref={footerRef}>
            <hr className={classes.line} />
            <Typography
                className={classes.footer}
                variant='button'
                display='block'
                onClick={() =>
                    window.open(
                        'https://github.com/thainamhoang/christmas-countdown',
                        '_blank'
                    )
                }
            >
                {'🎄 Made by Thai-Nam Hoang, with love 🎄'}
            </Typography>
        </footer>
    );
};

export default deepMemo(Footer);
