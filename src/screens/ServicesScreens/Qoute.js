import { View, Text, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState, useRef } from 'react'
import Header from '../../assets/components/reusable/Header'
import MainStyles from '../../assets/styles/MainStyles'
import BigButton from '../../assets/components/reusable/BigButton'
import { useNavigation } from '@react-navigation/native'
import InputField from '../../assets/components/reusable/InputField'
import Done_Modal from '../../assets/components/Done_Modal'
import PhoneInput from 'react-native-phone-number-input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';

export default function Qoute(props) {
    const navigation = useNavigation();
    const state = useSelector((state) => state.handleCart)
    const [visibility, setVisibility] = useState(false)
    const [phoneNumber, setphoneNumber] = useState('');
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [note, setNotes] = useState('')
    const [attach, setAttach] = useState('')

    const { year, payment } = props.route.params

    const storeData = () => {
        firestore()
            .collection('Request')
            .add({
                FirstName: first,
                LastName: last,
                PhoneNumber: phoneNumber,
                Email: email,
                Category: state.main,
                Service: state.name,
                Attachments: attach,
                Notes: note
            })
            .then(() => {
                console.log('Request Added');
                setVisibility(!visibility)
            });
    }


    const phoneInput = useRef(null);
    return (
        <View style={MainStyles.Home_Container} >
            <Header />
            <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
                <View style={{ alignItems: 'center', }}>
                    <Text style={[MainStyles.large_Text, { marginVertical: 20 }]}>Let’s Quote Us!</Text>

                    <InputField placeholder="First Name" icon="user" onChangeText={(text) => {
                        setFirst(text);
                    }} />

                    <InputField placeholder="Last Name" icon="user" onChangeText={(text) => {
                        setLast(text);
                    }} />

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
                            onChangeText={(text) => setphoneNumber(text)}
                            onChangeFormattedText={text => {
                                setphoneNumber(text);
                            }}
                        />
                        <AntDesign name='phone' size={20} />
                    </View>

                    <InputField placeholder='email' icon="voicemail" onChangeText={(text) => {
                        setEmail(text);
                    }} />


                    <InputField placeholder="Important Attachments (Optional)" icon="paperclip"
                        onChangeText={(text) => {
                            setAttach(text);
                        }} />


                    <View style={MainStyles.Input_Container}>
                        <TextInput
                            style={MainStyles.inputField}
                            placeholder="Additional notes..."
                            onChangeText={(text) => {
                                setNotes(text)
                            }}
                        />
                    </View>

                    <BigButton title="Submit"
                        onpress={email == '' || phoneNumber == '' ?
                            () => Alert.alert("Error", "Conact Info Cannot be Empty \n {Email and Phone}") :
                            () => storeData()} />

                    <Done_Modal visibility={visibility} onclose={() => setVisibility(!visibility)} />

                </View>
            </ScrollView>
        </View>
    )
}
