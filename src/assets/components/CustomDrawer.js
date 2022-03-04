import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Menu from '../svg/Menu.svg'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native'

export default function CustomDrawer(props) {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, }}>

            <View style={{ height: "25%", backgroundColor: "#33BD94" }}>
                <TouchableOpacity style={{ padding: 20 }}
                    activeOpacity={0.7}>
                    <Menu stroke="#fff" />
                </TouchableOpacity>

            </View>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />


            </DrawerContentScrollView>
        </View>
    )
}