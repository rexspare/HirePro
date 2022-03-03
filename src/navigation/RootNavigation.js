import React, { Component, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoarding from '../screens/OnBoarding/OnBoarding';
import AppStack from './AppStack';


export default function RootNavigation() {
    const [isFirstLaunched, setIsFirstLunch] = useState(true)
    const Stack = createNativeStackNavigator();

    useEffect(() => {
        // AsyncStorage.getItem('alreadyLaunched').then(value => {
        //     if (value == null) {
        //         AsyncStorage.setItem('alreadyLaunched', 'true');
        //         setIsFirstLunch(true);
        //     } else {
        //         setIsFirstLunch(false)
        //     }
        // })
    }, []);

    if (isFirstLaunched == null) {
        return null
    } else if (isFirstLaunched == true) {
        return (
            <NavigationContainer>
                < Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='OnBoarding' component={OnBoarding} />
                    <Stack.Screen name='AppStack' component={AppStack} />
                </Stack.Navigator>
            </NavigationContainer>)
    } else {
        return (
            <NavigationContainer>
                < Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='AppStack' component={AppStack} />

                </Stack.Navigator >
            </NavigationContainer>
        );
    }

}