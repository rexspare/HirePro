import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../assets/components/reusable/Header'
import BigButton from '../assets/components/reusable/BigButton'
import MainStyles from '../assets/styles/MainStyles'

import { ClientsData } from '../assets/data/ClientsData'
import { RenderClients } from '../assets/components/FlatLists'

export default function OurClients() {
    const navigation = useNavigation();
    const [data, setData] = useState(ClientsData)

    return (
        <View style={MainStyles.Story_Container}>
            <Header />

            <View style={{ alignItems: 'center' }}>

                <View style={MainStyles.heading_Contaiber}>

                    <Text style={[MainStyles.large_Text, { marginVertical: 10 }]}>Our Testimonials</Text>
                    <Text style={MainStyles.testemonial}>We have dozens of clients and endless success stories to boast of.
                        So, it’s about time you get that right from the horse’s mouth.</Text>

                </View>


                {/* BODY */}
                <View style={{ height: '75%' }}>
                    <FlatList
                        style={{ marginTop: 15 }}
                        data={data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <RenderClients item={item} />}
                        ListFooterComponent={<View style={{ marginVertical: 100 }}>
                            <BigButton title='Give us a try!'
                                onpress={() => navigation.navigate("Qoute")} />
                        </View>}
                    />
                </View>


            </View>

        </View>
    )
}