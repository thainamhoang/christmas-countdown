import React, { useState, useEffect } from 'react';
import { CProvider } from '@components/Context';

import Snowfall from 'react-snowfall';

import { DEFAULT_CONTEXT_VALUE } from '@constants';
import colors from '@colors';
import { deepMemo } from '@hooks';
import Footer from '@layouts/Footer';
import Header from '@layouts/Header';

const App = () => {
    const [contextValue, setContextValue] = useState(DEFAULT_CONTEXT_VALUE);

    useEffect(() => {
        console.log(contextValue);
    }, [contextValue]);

    const updateContextValue = (newValue) => {
        setContextValue(newValue);
    };

    return (
        <CProvider value={{ contextValue, updateContextValue }}>
            <div style={{ overflowX: 'hidden' }}>
                <div
                    className='root'
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: contextValue?.dHeight,
                        // backgroundColor: colors.green_light,
                    }}
                >
                    <Snowfall color={colors.white} snowflakeCount={500} />
                </div>
                <Header />
                <Footer />
            </div>
        </CProvider>
    );
};

export default deepMemo(App);
