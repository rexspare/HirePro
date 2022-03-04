import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../assets/components/reusable/Header'
import MainStyles from '../assets/styles/MainStyles'
import StoryData from '../assets/data/StoryData'

export default function OurStory() {
    const [data, setData] = useState(StoryData)

    return (
        <ScrollView style={MainStyles.Story_Container}>
            <Header />

            <View style={{ alignItems: 'center', marginTop: 15 }}>
                <Text style={MainStyles.small_Text}>We Would like to Share</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={MainStyles.large_Text}>Our Achievements </Text>
                    <Text style={MainStyles.small_Text}>with you:</Text>
                </View>
            </View>



            {/* BODY */}
            <View>

            </View>
        </ScrollView >
    )
}