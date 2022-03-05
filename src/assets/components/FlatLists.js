import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native"
import FlatListStyles from "../styles/FlatlistStyles";
import Star from '../svg/Star.svg'

export const RenderComponent = ({ item }) => {
    return (
        <View style={FlatListStyles.Box}>
            <Text style={FlatListStyles.numText}>{item.num}+</Text>
            <Text style={FlatListStyles.nameText}>{item.text}</Text>
        </View>
    )
}

export const RenderClients = ({ item }) => {
    return (
        <View style={FlatListStyles.client_Box}>

            <View style={FlatListStyles.clientDet}>
                <Image source={{ uri: "https://picsum.photos/200" }} style={FlatListStyles.clientImg} />

                <View>
                    <Text style={FlatListStyles.clientName}>{item.name}</Text>
                    <Text style={FlatListStyles.clientPos}>{item.position} </Text>

                    <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                        <Star /><Star /><Star /><Star /><Star />
                    </View>

                </View>

            </View>

            <Text style={FlatListStyles.clientmsg}>{item.msg}</Text>
        </View>
    )
}

