import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import ReusableStyles from '../../styles/Reusable_Compo_Styles/ReusableStyles'
import Menu from '../../svg/Menu.svg'

export default function Header() {
    return (
        <View style={ReusableStyles.header_Container}>
            <TouchableOpacity activeOpacity={0.7}>
                <Menu />
            </TouchableOpacity>
        </View>
    )
}
