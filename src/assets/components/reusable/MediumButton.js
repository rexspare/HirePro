import { View, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import ReusableStyles from '../../styles/Reusable_Compo_Styles/ReusableStyles'

export default function MediumButton(props) {
    return (
        <TouchableOpacity style={[ReusableStyles.mb_Container, { backgroundColor: props.bgc }]}
            activeOpacity={0.9}
            disabled={props.isDisabled}
            onPress={() => props.onpress()}>
            <Text style={[ReusableStyles.Button_text, { color: props.color }]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

MediumButton.defaultProps = {
    title: "MediumButton",
    isDisabled: false,
    onpress: () => console.log("No Props"),
    bgc: '#EFFFFA',
    color: "#33BD94"
};