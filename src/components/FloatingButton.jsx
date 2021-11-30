import React, { useState, useEffect } from 'react';

import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';

import { audio, length } from '@audio';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import colors from '@colors';
import { deepMemo, useAudio } from '@hooks';
import { Howl } from 'howler';

const theme = createTheme();

const useStyles = makeStyles({
    root: {
        margin: 0,
        top: 'auto',
        right: theme.spacing(3),
        bottom: theme.spacing(3),
        left: 'auto',
        position: 'fixed',
        width: theme.spacing(7),
        height: theme.spacing(7),
        borderRadius: '50%',
        backgroundColor: colors.green_80,
        [theme.breakpoints.down('md')]: {
            right: theme.spacing(2),
            bottom: theme.spacing(2),
            width: theme.spacing(6),
            height: theme.spacing(6),
        },
        '&:hover': {
            transition: 'all .3s ease-in-out',
            backgroundColor: colors.green_light,
        },
    },
});

const FloatingButton = ({}) => {
    const classes = useStyles();
    const [playing, toggle] = useAudio({
        audio,
        length,
    });

    return (
        <div className={classes.root} onClick={toggle}>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {playing ? (
                    <Pause style={{ fill: colors.white }} />
                ) : (
                    <PlayArrow style={{ fill: colors.white }} />
                )}
            </div>
        </div>
    );
};

export default deepMemo(FloatingButton);
