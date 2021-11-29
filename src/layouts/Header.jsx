import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import colors from '@colors';
import { deepMemo } from '@hooks';
import useReactFontLoader from 'react-font-loader';
import Countdown from '@components/Countdown';
import images from '@images';

const theme = createTheme();

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundImage: `url(${images.background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        display: 'flex',
    },
    grid: {
        paddingTop: theme.spacing(20),
    },
    heading: {
        fontSize: '4.5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
        },
    },
});

const Header = () => {
    const classes = useStyles();

    useReactFontLoader({
        url: 'https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap',
    });

    const currentDate = new Date();
    const year =
        currentDate.getMonth() === 11 && currentDate.getDate() > 23
            ? currentDate.getFullYear() + 1
            : currentDate.getFullYear();

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} container spacing={3}>
                <Grid item xs={12}>
                    <h2
                        style={{
                            textAlign: 'center',
                            fontFamily: 'Caveat',
                            color: colors.green_light,
                            fontWeight: '500',
                        }}
                        className={classes.heading}
                    >
                        {"It's the Holiday Season of the year!"}
                    </h2>
                    <Countdown date={`${year}-12-25T00:00:00`} />
                </Grid>
            </Grid>
        </div>
    );
};

export default deepMemo(Header);
