import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();
export default class AppStack extends Component {
    render() {
        return (

            <Drawer.Navigator screenOptions={{
                headerShown: false
            }}>
                <Drawer.Screen name='Home' component={HomeStack} />

            </Drawer.Navigator>

        )
    }
}
