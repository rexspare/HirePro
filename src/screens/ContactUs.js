import { View, Text } from 'react-native'
import React from 'react'
import Header from '../assets/components/reusable/Header'
import MainStyles from '../assets/styles/MainStyles'
import BigButton from '../assets/components/reusable/BigButton'

import Email from '../assets/svg/Contactsvg/Email.svg'
import Phone from '../assets/svg/Contactsvg/Phone.svg'
import Circle from '../assets/svg/Contactsvg/Circle.svg'

export default function ContactUs() {
    return (
        <View style={MainStyles.Home_Container}>
            <Header />

            <View style={{ alignItems: 'center', marginTop: 12 }}>
                <Text style={MainStyles.large_Text}>Feel Free to Contact Us!</Text>

                {/* BOXES */}
                <View style={MainStyles.Contact_Box}>
                    <View style={{ marginBottom: 20 }}><Email /></View>

                    <Text style={MainStyles.contactText}>Simply drop us an email at</Text>
                    <Text style={MainStyles.contactDet}>hello@letshirepro.com</Text>
                    <Text style={MainStyles.contactText}>You'll receive a reply within 24 hours.</Text>
                </View>


                <View style={MainStyles.Contact_Box}>
                    <View style={{ marginBottom: 20 }}><Circle /></View>
                    <View style={{ position: 'absolute', top: 55 }}><Phone /></View>

                    <Text style={MainStyles.contactText}>Give us a ring at</Text>
                    <Text style={MainStyles.contactDet}>+92 303 0279747</Text>
                    <Text style={MainStyles.contactText}> Our experts are standing by 24 hours from 9 AM to 9 PM EST.</Text>
                </View>

                <BigButton title="Lets Quote Us!" />
            </View>

        </View>
    )
}