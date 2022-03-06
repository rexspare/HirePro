import { View, Text } from 'react-native'
import React, { useState } from 'react'

import CompoStyles from '../../styles/CompoStyles'

import { back_end_Data, frontend_Data, CMS } from '../../data/ServicesData'
import { SelectSubServces } from '../FlatLists'

export default function Web_Dev() {
    return (
        <View style={{ paddingHorizontal: 10 }}>

            <View style={{ alignItems: 'center', marginVertical: 15 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={CompoStyles.small_heading}>Our </Text>
                    <Text style={CompoStyles.story_Header}>Web Development &</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={CompoStyles.story_Header}>Designing </Text>
                    <Text style={CompoStyles.small_heading}>team excel in</Text>
                </View>
            </View>

            <Text style={CompoStyles.subServiceText}>Back-end Development</Text>
            <SelectSubServces service={back_end_Data} />

            <Text style={CompoStyles.subServiceText}>Front-end Development</Text>
            <SelectSubServces service={frontend_Data} />

            <Text style={CompoStyles.subServiceText}>CMS</Text>
            <SelectSubServces service={CMS} />

        </View>
    )
}