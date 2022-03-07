import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MainStyles from '../assets/styles/MainStyles'
import Header from '../assets/components/reusable/Header'
// SVGs
import Home_Freelancer from '../assets/svg/Home/Home_Freelancer.svg'
import Home_Full_Time from '../assets/svg/Home/Home_Full_Time.svg'
import Home_Team from '../assets/svg/Home/Home_Team.svg'

import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={MainStyles.Home_Container}>
            <Header />
            {/* BODY */}
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={[MainStyles.header_text]}>
                    Good Evening!</Text>
                <Text style={MainStyles.header_text_S}>We are Glad to see you!</Text>
            </View>

            <View style={MainStyles.home_Body}>
                <View style={{ marginTop: 30, alignItems: 'center' }}>
                    <Text style={MainStyles.det_text}>What Type of Hiring Model</Text>
                    <Text style={MainStyles.det_text}>Suits You Best?</Text>
                </View>

                <TouchableOpacity style={MainStyles.Main_btn} activeOpacity={0.7}
                    onPress={() => navigation.navigate("Services")}>
                    <Home_Full_Time />
                    <Text style={MainStyles.det_text}>Full-Time Employee</Text>
                </TouchableOpacity>

                <TouchableOpacity style={MainStyles.Main_btn} activeOpacity={0.7}
                    onPress={() => navigation.navigate("Services")}>
                    <Home_Freelancer />
                    <Text style={MainStyles.det_text}>Freelancer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={MainStyles.Main_btn} activeOpacity={0.7}
                    onPress={() => navigation.navigate("Services")}>
                    <Home_Team />
                    <Text style={MainStyles.det_text}>Full-Time Employee</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}