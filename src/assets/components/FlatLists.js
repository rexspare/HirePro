import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import FlatListStyles from "../styles/FlatlistStyles";


export const RenderComponent = ({ item }) => {
    return (
        <View style={FlatListStyles.Box}>
            <Text style={FlatListStyles.numText}>{item.num}+</Text>
            <Text style={FlatListStyles.nameText}>{item.text}</Text>
        </View>
    )
}

