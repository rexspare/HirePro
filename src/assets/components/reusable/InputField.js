import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import ReusableStyles from '../../styles/Reusable_Compo_Styles/ReusableStyles';

export default function InputField(props) {
    return (
        <View style={ReusableStyles.Input_Container}>
            <TextInput
                style={ReusableStyles.inputField}
                placeholder={props.placeholder}
                onChangeText={(text) => props.onChangeText(text)}
            />
            <Feather name={props.icon} size={20} />
        </View>
    )
}