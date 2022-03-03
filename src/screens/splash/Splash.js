import { View, Text } from 'react-native'
import AnimatedSplash from "react-native-animated-splash-screen";
import React, { useState, useEffect } from 'react'
import Splash_S from '../../assets/svg/Splash_S.svg'
import App from '../../../App';

export default function Splash() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 2000)
    }, []);

    return (
        <AnimatedSplash
            translucent={false}
            isLoaded={isLoaded}
            customComponent={
                <View>
                    <Splash_S />
                </View>
            }
            backgroundColor="#33bd94"
            logoHeight={100}
            logoWidth={100}
        >

            <App />
        </AnimatedSplash>
    )
}