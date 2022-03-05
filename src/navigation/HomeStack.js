import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Services from '../screens/ServicesScreens/Services';
import SelectedServices from '../screens/ServicesScreens/SelectedServices';
import Qoute from '../screens/ServicesScreens/Qoute';
import React, { Component } from 'react'

export default function HomeStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>

            <Stack.Screen name='HomeScreen' component={Home} />
            <Stack.Screen name='Services' component={Services} />
            <Stack.Screen name='SelectedServives' component={SelectedServices} />
            <Stack.Screen name='Qoute' component={Qoute} />

        </Stack.Navigator>
    )
}