import { View, Text, FlatList } from 'react-native'
import React from 'react'
import MainStyles from '../assets/styles/MainStyles'
import Header from '../assets/components/reusable/Header'
import Menu from '../assets/svg/Menu.svg'

export default function Services() {
    const data = [{
        svg: <Menu />
    }]

    const Slide = ({ item }) => {
        return (

            <View>

                {item.svg}

            </View>
        );
    };
    return (
        <View style={MainStyles.Home_Container}>
            <Header />
            {/* BODY */}
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Slide item={item} />}
                />


            </View>

        </View>
    )
}