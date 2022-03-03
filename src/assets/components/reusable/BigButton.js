import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ReusableStyles from '../../styles/Reusable_Compo_Styles/ReusableStyles'

export default function BigButton(props) {
    return (
        <TouchableOpacity style={ReusableStyles.button_Container}
            activeOpacity={0.9}
            onPress={() => props.onpress()}>
            <Text style={ReusableStyles.Button_text}>{props.title}</Text>
        </TouchableOpacity>
    )
}