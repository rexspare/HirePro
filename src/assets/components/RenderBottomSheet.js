import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import CompoStyles from '../styles/CompoStyles'
import SmallButton from './reusable/SmallButton';
import MediumButton from './reusable/MediumButton';
import BigButton from './reusable/BigButton';

export default function RenderBottomSheet(props) {
    const state = useSelector((state) => state.handleCart)
    const navigation = useNavigation();
    const [m_btn1, setM_btn1] = useState(true)
    const [m_btn2, setM_btn2] = useState(false)

    const m_btn1_Pressed = () => {
        setM_btn1(true); setM_btn2(false)
    }

    const m_btn2_Pressed = () => {
        setM_btn1(false); setM_btn2(true)
    }

    return (
        <View style={CompoStyles.bs_container}>
            <TouchableOpacity style={CompoStyles.bs_icon} activeOpacity={0.7}
                onPress={() => props.sheetRef()} >
                <Feather name='x-circle' size={24} />
            </TouchableOpacity>

            <Text style={CompoStyles.bs_heading}>{state.name}</Text>
            <Text style={CompoStyles.bs_text}>{state.desc}</Text>
            {/* STATIC */}
            <Text style={CompoStyles.bs_heading}>Hiring Preferences</Text>

            <Text style={CompoStyles.bs_SmallHeading}>Experience:</Text>

            <View style={CompoStyles.smallButtonContainer}>
                <SmallButton bgc='#33BD94' color='#fff' />
                <SmallButton title='2' />
                <SmallButton title='3' />
                <SmallButton title='Other' />
            </View>
            <Text style={[CompoStyles.bs_SmallHeading, { right: 110 }]}>Payment:</Text>

            <View style={CompoStyles.smallButtonContainer}>
                <MediumButton title='Per Hour' onpress={m_btn1_Pressed}
                    bgc={m_btn1 ? '#33BD94' : "#EFFFFA"} color={m_btn1 ? '#fff' : "#33BD94"} />
                <MediumButton title='Per Month' onpress={m_btn2_Pressed}
                    bgc={m_btn2 ? '#33BD94' : "#EFFFFA"} color={m_btn2 ? '#fff' : "#33BD94"} />
            </View>

            <View style={CompoStyles.priceCaption}>
                <Text style={{ fontFamily: 'Metropolis-Medium', fontSize: 15 }}>You are Hiring a</Text>
                <Text style={{ fontFamily: 'Metropolis-Bold', fontSize: 15 }}> {state.name}</Text>
                <Text style={{ fontFamily: 'Metropolis-Medium', fontSize: 15 }}> Export for</Text>
            </View>

            <MediumButton title={m_btn1 ? state.perHour + "$" : state.perMonth + "$"} isDisabled={true} />

            <View style={{ marginTop: 15 }}>
                <BigButton title="Done"
                    onpress={() => navigation.navigate('Qoute')} />
            </View>
        </View >
    )
}