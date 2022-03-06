import { View, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import ReusableStyles from '../../styles/Reusable_Compo_Styles/ReusableStyles'
import { color } from 'react-native-reanimated';

export default function SmallButton(props) {
    return (
        <TouchableOpacity style={[ReusableStyles.sm_Container, { backgroundColor: props.bgc }]}
            activeOpacity={0.9}
            disabled={props.isDisabled}
            onPress={() => props.onpress()}>
            <Text style={[{ color: props.color }, ReusableStyles.small_num]}>{props.title}</Text>
            <Text style={[ReusableStyles.Button_text, { color: props.color }]}>Years</Text>
        </TouchableOpacity>
    )
}

SmallButton.defaultProps = {
    title: "1",
    title1: 'Years',
    isDisabled: false,
    onpress: () => console.log("No Props"),
    bgc: '#EFFFFA',
    color: "#33BD94"
};