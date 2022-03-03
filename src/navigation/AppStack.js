import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home'

const Drawer = createDrawerNavigator();
export default class AppStack extends Component {
    render() {
        return (

            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home} />
            </Drawer.Navigator>

        )
    }
}