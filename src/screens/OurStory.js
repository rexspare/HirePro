import { View, Text, ScrollView, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../assets/components/reusable/Header'
import Stories from '../assets/components/Stories'
import BigButton from "../assets/components/reusable/BigButton"
import MainStyles from '../assets/styles/MainStyles'
import { StoryData } from '../assets/data/StoryData'
import { RenderComponent } from '../assets/components/FlatLists'

export default function OurStory() {
    const navigation = useNavigation();
    const [data, setData] = useState(StoryData)

    return (

        <View style={MainStyles.Story_Container}>
            <Header />

            <ScrollView>
                <View style={{ alignItems: 'center' }}>

                    <View style={{ alignItems: 'center', marginTop: 15 }}>
                        <Text style={MainStyles.small_Text}>We Would like to Share</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={MainStyles.large_Text}>Our Achievements </Text>
                            <Text style={MainStyles.small_Text}>with you:</Text>
                        </View>
                    </View>




                    {/* BODY */}

                    <FlatList
                        style={{ marginTop: 15 }}
                        data={data}
                        numColumns={2}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <RenderComponent item={item} />}
                    />

                    <Stories />

                    <View style={{ marginBottom: 120 }}>
                        <BigButton title="Give us a try!"
                            onpress={() => navigation.navigate("Qoute")} />
                    </View>

                </View>
            </ScrollView>
        </View >
    )
}