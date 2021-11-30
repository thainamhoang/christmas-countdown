import { useState, useEffect, memo } from 'react';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import random from 'lodash/random';

export const deepMemo = (factory, dependency) => {
    return memo(factory, (next, prev) => {
        if (isEmpty(dependency)) {
            return isEqual(next, prev);
        }
        return dependency(next, prev);
    });
};

export const useAudio = ({ isPlaying = false, audio, length }) => {
    const [currentAudio, setCurrentAudio] = useState(
        new Audio(audio[random(length - 1)])
    );
    const [playing, setPlaying] = useState(isPlaying);

    const toggle = () => {
        setPlaying(!playing);
    };

    useEffect(() => {
        playing ? currentAudio.play() : currentAudio.pause();
        if (playing) {
            console.log('Now playing:', currentAudio.src);
        }
    }, [playing]);

    useEffect(() => {
        currentAudio.addEventListener('ended', () => {
            setPlaying(false);
            setCurrentAudio(new Audio(audio[random(length - 1)]));
            setTimeout(() => {
                setPlaying(true);
            }, 150);
        });
        return () => {
            currentAudio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};
