import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../assets/components/reusable/Header'
import MainStyles from '../../assets/styles/MainStyles'
import BigButton from '../../assets/components/reusable/BigButton'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../assets/components/reusable/InputField'
import Done_Modal from '../../assets/components/Done_Modal'

export default function Qoute() {
    const navigation = useNavigation();
    const [visibility, setVisibility] = useState(false)
    return (
        <View style={MainStyles.Home_Container} >
            <Header />
            <ScrollView>
                <View style={{ alignItems: 'center', marginBottom: 120 }}>
                    <Text style={[MainStyles.large_Text, { marginVertical: 20 }]}>Let’s Quote Us!</Text>

                    <InputField placeholder="First Name" icon="user" />

                    <InputField placeholder="Last Name" icon="user" />

                    <InputField placeholder="Phone" icon="phone" />

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