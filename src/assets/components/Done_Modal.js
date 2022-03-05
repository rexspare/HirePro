import { View, Text, Modal } from 'react-native'
import React from 'react'
import CompoStyles from '../styles/CompoStyles'
import Done from '../svg/Done.svg'

export default function Done_Modal(props) {
    return (
        <Modal
            visible={props.visibility}
            animationType="slide"
            transparent={true}
            onRequestClose={() => props.onclose()}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={CompoStyles.modalContainer}>
                    <Done />
                    <Text style={CompoStyles.largeText}>Submition Successful!</Text>

                    <Text style={[CompoStyles.smallText, { color: '#565656' }]}>
                        Your Quote has been Submitted :) </Text>

                    <Text style={[CompoStyles.smallText, { color: '#33BD94' }]}>
                        We’ll contact you within 24 hours.</Text>

                </View>
            </View>
        </Modal>
    )
}