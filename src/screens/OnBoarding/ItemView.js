import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import OnBoarding_1 from '../../assets/svg/Onborading/OnBoarding_1.svg'
import OnBoarding_2 from '../../assets/svg/Onborading/OnBoarding_2.svg'
import OnBoarding_3 from '../../assets/svg/Onborading/OnBoarding_3.svg'

const COLORS = { primary: '#383838', white: '#fff' };
const { width, height } = Dimensions.get('screen');
export default function ItemView(props) {

    const id = props.slider?.id
    return (
        <View style={{ width: width, alignItems: 'center' }}>
            {/* Skip button */}
            <TouchableOpacity style={styles.skip_Container} activeOpacity={0.8}
                onPress={() => props.onSkip()}>
                <Text style={styles.skip_text}>Skip</Text>
            </TouchableOpacity>
            {/* BODY */}
            <View style={{ alignItems: 'center', top: 150, width: width }}>
                <View style={{ width: 300, alignItems: 'center', bottom: 10 }}>
                    <Text style={styles.title}>{props.slider?.title}</Text>
                    <Text style={styles.subtitle}>{props.slider?.subtitle}</Text>
                </View>
                {/* <Image
                source={props.slider?.image}
                style={{ height: '60%', width, resizeMode: 'contain' }}
            /> */}
                {id == "1" ? <OnBoarding_1 /> : null}
                {id == "2" ? <OnBoarding_2 /> : null}
                {id == "3" ? <OnBoarding_3 style={{ left: 20 }} /> : null}
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    subtitle: {
        color: COLORS.white,
        fontSize: 13,
        marginTop: 10,
        fontFamily: 'Metropolis-Medium',
        textAlign: 'center',
        lineHeight: 16,
    },
    title: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: 'Metropolis-Bold',
        marginTop: 20,
        textAlign: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    skip_Container: {
        position: 'absolute',
        top: 25,
        right: 25
    },
    skip_text: {
        color: '#fff',
        fontFamily: 'Metropolis',
        fontSize: 16
    }

});