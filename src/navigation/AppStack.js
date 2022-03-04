import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import ContactUs from '../screens/ContactUs'
import OurStory from '../screens/OurStory'
import OurClients from '../screens/OurClients'
import Terms from '../screens/Terms'
import Policy from '../screens/Policy'
import CustomDrawer from '../assets/components/CustomDrawer';

// SVGs
import Home from '../assets/svg/Drawer/Home.svg'
import Contact from '../assets/svg/Drawer/Contact.svg'
import Frame from '../assets/svg/Drawer/Frame.svg'
import Trending from '../assets/svg/Drawer/Trending.svg'
import PolicyIcon from '../assets/svg/Drawer/PolicyIcon.svg'
import UsersIcon from '../assets/svg/Drawer/UsersIcon.svg'

const Drawer = createDrawerNavigator();
export default class AppStack extends Component {
    render() {
        return (

            <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: '#EFFFFA',
                    drawerActiveTintColor: "#949494",
                    drawerInactiveTintColor: "#949494",
                    drawerLabelStyle: { fontSize: 16, marginLeft: -14, },
                    drawerItemStyle: { paddingLeft: 5 }
                }}>
                <Drawer.Screen name='Home' component={HomeStack}
                    options={{
                        drawerLabel: "Home",
                        drawerIcon: ({ color }) => (
                            <Home />)
                    }}
                />

                <Drawer.Screen name='ContactUs' component={ContactUs}
                    options={{
                        drawerLabel: "Contact Us",
                        drawerIcon: ({ color }) => (
                            <Contact />)
                    }}
                />

                <Drawer.Screen name='OurStory' component={OurStory}
                    options={{
                        drawerLabel: "Our Story",
                        drawerIcon: ({ color }) => (
                            <Trending />)
                    }}
                />

                <Drawer.Screen name='OurClients' component={OurClients}
                    options={{
                        drawerLabel: "Our Clients",
                        drawerIcon: ({ color }) => (
                            <UsersIcon />)
                    }}
                />

                <Drawer.Screen name='Terms' component={Terms}
                    options={{
                        drawerLabel: "Terms & Conditions",
                        drawerIcon: ({ color }) => (
                            <Frame />)
                    }}
                />

                <Drawer.Screen name='Policy' component={Policy}
                    options={{
                        drawerLabel: "Privacy Policy",
                        drawerIcon: ({ color }) => (
                            <PolicyIcon />)
                    }}
                />


            </Drawer.Navigator>

        )
    }
}
