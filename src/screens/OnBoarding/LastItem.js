import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import BigButton from '../../assets/components/reusable/BigButton';

const COLORS = { primary: '#383838', white: '#fff' };
const { width, height } = Dimensions.get('screen');
export default function LastItem(props) {
    const img = props.slider.image
    return (

        <View style={{ alignItems: 'center', width: width, top: 130 }}>

            <Text style={[styles.title, {
                width: '90%',
            }]}>Your journey to hire experienced
                professionals seamlessly begins
                here with HirePro.</Text>

            <View style={styles.Details_Container}>
                {/* SVG */}
                {props.slider?.svg}
                <View style={{ width: '66%', paddingLeft: 15 }}>

                    <Text style={styles.heading}>You Share, We Care</Text>
                    <Text style={styles.text}>On HirePro, You share your concerns with us.
                        We dig deep into your issues, identify your
                        hiring goals, and spin the roulette wheel.
                    </Text>

                    <Text style={[styles.heading, { marginTop: 25 }]}>Pick ‘n Choose</Text>
                    <Text style={[styles.text]}>We showcase you the best of our resources and
                        All you need to do is go through their profile and
                        hire an IT professional that suits you best.
                    </Text>

                    <Text style={[styles.heading, { marginTop: 25 }]}>Sit Back and Relax</Text>
                    <Text style={styles.text}>With our top-notch professionals at your disposal,
                        all you need to do is sit back and relax. They know
                        their job well and make sure to go above and
                        beyond your expectations.</Text>
                </View>
            </View>

            <View style={styles.Btn_Styles}>
                <BigButton title="Let's HirePro" onpress={() => props.goHome()} />
            </View>

        </View >
    )
}

const styles = StyleSheet.create({

    title: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: 'Metropolis-Bold',
        textAlign: 'center',
        marginBottom: 15
    },
    Details_Container: {
        flexDirection: 'row',
    },

    heading: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Metropolis-Bold',
        marginTop: 10,
        marginBottom: 15
    },

    text: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Metropolis-Medium',
    },

    Btn_Styles: {
        top: 40
    }


});