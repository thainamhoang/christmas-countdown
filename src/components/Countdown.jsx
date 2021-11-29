import React, { useState, useEffect } from 'react';

import ReactFontLoader from 'react-font-loader';
import { makeStyles } from '@mui/styles';
import { deepMemo } from '@hooks';
import colors from '@colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        color: colors.green_light,
        fontSize: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        lineHeight: '30px',
        margin: '10px',
        position: 'relative',
        width: '100px',
        height: '100px',
        fontFamily: 'Montserrat',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
            width: '50px',
            height: '50px',
        },
    },
    itemSpan: {
        color: colors.green_light,
        fontSize: '16px',
        fontWeight: 600,
        textTransform: 'uppercase',
        [theme.breakpoints.down('md')]: {
            fontSize: '12px',
        },
    },
});

const Countdown = ({ date }) => {
    const classes = useStyles();
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = Date.parse(new Date(date)) - now;

            const day = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hour = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minute = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const second = Math.floor((distance % (1000 * 60)) / 1000);

            setDay(day);
            setHour(hour);
            setMinute(minute);
            setSecond(second);
        }, 1000);

        return () => clearInterval(interval.current);
    }, []);

    useEffect(() => {
        console.log({ day, hour, minute, second });
    }, [day, hour, minute, second]);

    const addLeadingZeros = (value) => {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    };

    return (
        <div>
            <div>
                <ReactFontLoader url='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' />
            </div>
            <div className={classes.root}>
                <div className={classes.item}>
                    {addLeadingZeros(day)}
                    <span className={classes.itemSpan}>
                        {day <= 1 ? 'day' : 'days'}
                    </span>
                </div>
                <div className={classes.item}>
                    {addLeadingZeros(hour)}
                    <span className={classes.itemSpan}>
                        {hour <= 1 ? 'hour' : 'hours'}
                    </span>
                </div>
                <div className={classes.item}>
                    {addLeadingZeros(minute)}
                    <span className={classes.itemSpan}>minute</span>
                </div>
                <div className={classes.item}>
                    {addLeadingZeros(second)}
                    <span className={classes.itemSpan}>second</span>
                </div>
            </div>
        </div>
    );
};

export default deepMemo(Countdown);
