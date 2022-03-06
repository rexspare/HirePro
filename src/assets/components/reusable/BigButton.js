import { View, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import ReusableStyles from '../../styles/Reusable_Compo_Styles/ReusableStyles'

export default function BigButton(props) {

    return (
        <TouchableOpacity style={ReusableStyles.button_Container}
            activeOpacity={0.9}
            disabled={props.isDisabled}
            onPress={() => props.onpress()}>
            <Text style={ReusableStyles.Button_text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

BigButton.defaultProps = {
    title: "BigButton",
    isDisabled: false,
    onpress: () => console.log("No Props")
};