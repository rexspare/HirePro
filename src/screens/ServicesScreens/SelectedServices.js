import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Header from '../../assets/components/reusable/Header'
import BigButton from '../../assets/components/reusable/BigButton'
import MainStyles from '../../assets/styles/MainStyles'
import { useNavigation } from '@react-navigation/native'
import { RenderSelected } from '../../assets/components/FlatLists'

export default function SelectedServices({ route }) {
    const navigation = useNavigation();
    const { selected } = route.params

    return (
        < View style={MainStyles.Home_Container} >
            <Header />
            {/* BODY */}
            <View>
                <FlatList
                    data={selected}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <RenderSelected item={item} />}

                />
            </View>
        </View >
    )
}