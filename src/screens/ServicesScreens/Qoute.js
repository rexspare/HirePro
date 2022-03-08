import { View, Text, TextInput, ScrollView, StyleSheet, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import Header from '../../assets/components/reusable/Header'
import MainStyles from '../../assets/styles/MainStyles'
import BigButton from '../../assets/components/reusable/BigButton'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../assets/components/reusable/InputField'
import Done_Modal from '../../assets/components/Done_Modal'
import PhoneInput from 'react-native-phone-number-input';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Qoute() {
    const navigation = useNavigation();
    const [visibility, setVisibility] = useState(false)
    const [phoneNumber, setphoneNumber] = useState('');
    const phoneInput = useRef(null);
    return (
        <View style={MainStyles.Home_Container} >
            <Header />
            <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
                <View style={{ alignItems: 'center', }}>
                    <Text style={[MainStyles.large_Text, { marginVertical: 20 }]}>Let’s Quote Us!</Text>

                    <InputField placeholder="First Name" icon="user" />

                    <InputField placeholder="Last Name" icon="user" />

                    {/* <InputField placeholder="Phone" icon="phone" /> */}
                    <View style={MainStyles.Input_Container1}>
                        <PhoneInput
                            ref={phoneInput}
                            defaultValue={phoneNumber}
                            defaultCode="IN"
                            layout="first"
                            withShadow
                            autoFocus
                            containerStyle={MainStyles.phoneContainer}
                            textContainerStyle={MainStyles.textInput}

                            onChangeFormattedText={text => {
                                setphoneNumber(text);
                            }}
                        />
                        <AntDesign name='phone' size={20} />
                    </View>

                    <InputField placeholder="Email" icon="voicemail" />


                    <InputField placeholder="Important Attachments (Optional)" icon="paperclip" />


                    <View style={MainStyles.Input_Container}>
                        <TextInput
                            style={MainStyles.inputField}
                            placeholder="Additional notes..."
                        />
                    </View>

                    <BigButton title="Submit"
                        onpress={() => setVisibility(!visibility)} />

                    <Done_Modal visibility={visibility} onclose={() => setVisibility(!visibility)} />

                </View>
            </ScrollView>
        </View>
    )
}
