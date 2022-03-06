import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
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
                <SmallButton />
                <SmallButton title='2' />
                <SmallButton title='3' />
                <SmallButton title='Other' />
            </View>
            <Text style={[CompoStyles.bs_SmallHeading, { right: 110 }]}>Payment:</Text>

            <View style={CompoStyles.smallButtonContainer}>
                <MediumButton title='Per Hour' />
                <MediumButton title='Per Month' />
            </View>

            <View style={CompoStyles.priceCaption}>
                <Text style={{ fontFamily: 'Metropolis-Medium', fontSize: 15 }}>You are Hiring a</Text>
                <Text style={{ fontFamily: 'Metropolis-Bold', fontSize: 15 }}> {state.name}</Text>
                <Text style={{ fontFamily: 'Metropolis-Medium', fontSize: 15 }}> Export for</Text>
            </View>

            <MediumButton title="8 $" isDisabled={true} />
            <View style={{ marginTop: 15 }}>
                <BigButton title="Done"
                    onpress={() => navigation.navigate('Qoute')} />
            </View>
        </View >
    )
}