import { View, Text, ScrollView, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import Header from '../assets/components/reusable/Header'
import MainStyles from '../assets/styles/MainStyles'
import { StoryData } from '../assets/data/StoryData'
import { RenderComponent } from '../assets/components/FlatLists'
import Stories from '../assets/components/Stories'
import BigButton from "../assets/components/reusable/BigButton"

export default function OurStory() {
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
                            onpress={() => Alert.alert("THANKS")} />
                    </View>

                </View>
            </ScrollView>
        </View >
    )
}