import { View, Text } from 'react-native'
import React from 'react'

import CompoStyles from '../../styles/CompoStyles'
import { App_Data } from '../../data/ServicesData'
import { SelectSubServces } from '../FlatLists'

export default function App_Dev() {
    return (
        <View style={{ paddingHorizontal: 10 }}>

            <View style={{ alignItems: 'center', marginVertical: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={CompoStyles.small_heading}>Our </Text>
                    <Text style={CompoStyles.story_Header}>App Development </Text>
                    <Text style={CompoStyles.small_heading}>team </Text>
                </View>
                <Text style={CompoStyles.small_heading}>Specializes in: </Text>
            </View>

            <SelectSubServces service={App_Data} />


        </View>
    )
}