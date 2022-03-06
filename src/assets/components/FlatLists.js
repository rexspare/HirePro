import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from "react-native"
import React, { Component, useState } from 'react';
import FlatListStyles from "../styles/FlatlistStyles";

import Star from '../svg/Star.svg'
import Unchecked from '../svg/Service_svg/Unchecked.svg'
import Checked_Green from '../svg/Service_svg/Checked_Green.svg'

import { useDispatch, useSelector } from 'react-redux';
import { AddService, DelService } from '../../redux/action';

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


export const RenderSelected = ({ item }) => {
    return (
        <ScrollView>
            {item.compo}
        </ScrollView>
    )
}


export function SelectSubServces(props) {
    const [renderData, setRenderData] = useState(props.service)
    const [selectedServices, setSelectedServices] = useState([])
    const dispatch = useDispatch();

    //function will call when Button clicked
    const onPressHandler = (id) => {
        let renderData1 = [...renderData];
        let selectedServices1 = [...selectedServices];

        for (let data of renderData) {
            if (data.id == id) {
                data.selected = (data.selected == null) ? true : !data.selected;
                if (data.selected) {
                    selectedServices1.push(data);
                    dispatch(AddService(data))
                } else {
                    selectedServices1 = arrayRemove(selectedServices, data.name)
                    dispatch(DelService(data))
                }
                break;
            }
        }
        setRenderData(renderData1)
        setSelectedServices(selectedServices1)
    }

    // function which remove value from array and return  
    const arrayRemove = (arr, value) => {

        return arr.filter(function (geeks) {
            return geeks != value;

        });
    }

    const RenderComponent = ({ item }) => {
        return (
            <TouchableOpacity
                style={FlatListStyles.subServiceContainer}
                onPress={() => onPressHandler(item.id)}
                activeOpacity={0.7} >

                <View style={{ paddingHorizontal: 10 }}>
                    {item.selected == true ? <Checked_Green /> : <Unchecked />}
                </View>

                <Text style={{ fontFamily: 'Metropolis-Medium', fontSize: 15 }}
                >{item.name}</Text>


            </TouchableOpacity >
        );
    };


    return (
        <View >
            <FlatList
                style={{ marginTop: 15 }}
                data={renderData}
                keyExtractor={item => item.id.toString()}
                listKey={(item) => item.name}
                renderItem={({ item }) => <RenderComponent item={item} />}
            />
        </View>

    )

}



