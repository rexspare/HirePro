import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import ReusableStyles from '../../styles/Reusable_Compo_Styles/ReusableStyles'
import Menu from '../../svg/Menu.svg'
import { useNavigation } from '@react-navigation/native'

export default function Header() {
    const navigation = useNavigation()
    return (
        <View style={ReusableStyles.header_Container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}
                activeOpacity={0.7}>
                <Menu stroke="#33BD94" />
            </TouchableOpacity>
        </View>
    )
}
