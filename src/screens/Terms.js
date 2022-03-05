import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../assets/components/reusable/Header'
import MainStyles from '../assets/styles/MainStyles'
import BigButton from '../assets/components/reusable/BigButton'
import { useNavigation } from '@react-navigation/native'

export default function Terms() {
    const navigation = useNavigation();
    return (
        < View style={MainStyles.Home_Container} >
            <Header />

            <View style={{ alignItems: 'center', width: '85%', alignSelf: 'center' }}>


                <ScrollView contentContainerStyle={{
                    alignItems: 'center',
                    paddingBottom: 200
                }}
                    showsVerticalScrollIndicator={false}>


                    <Text style={MainStyles.large_Text}>Terms & Conditions</Text>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={MainStyles.termText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla non felis non mauris iaculis vulputate et tristique tellus.
                            Phasellus eu cursus velit, nec facilisis ligula. Integer sit amet
                            pellentesque purus. Pellentesque ultrices turpis elementum magna
                            pellentesque tincidunt. Ut lacinia finibus rhoncus. Donec eu
                            dapibus neque, quis placerat mi. Praesent porta purus et est
                            euismod facilisis.
                        </Text>
                        <Text style={MainStyles.termText}>
                            Proin sed tellus et orci imperdiet sollicitudin at in metus.
                            Aenean blandit nec mi euismod pellentesque. In ullamcorper
                            ante sit amet hendrerit maximus. Vestibulum fermentum ante
                            in nisl ultricies blandit. In dolor massa, elementum eu
                            turpis at, luctus volutpat lacus. Pellentesque mollis
                            dignissim odio, placerat imperdiet neque hendrerit sed.
                            Morbi dictum dui ac magna dictum, non iaculis odio suscipit.
                        </Text>
                        <Text style={MainStyles.termText}>

                            Ut a tellus volutpat, dignissim turpis in, tristique sapien.
                            Aliquam dignissim nec leo quis sodales. Nunc accumsan
                            pellentesque mauris, eu accumsan ligula efficitur in.
                            Phasellus pharetra lacus laoreet, iaculis eros quis,
                            pulvinar nulla. Curabitur sit amet sodales sapien.
                            Nunc congue vulputate est, sed laoreet ipsum rutrum
                            nec. Nullam sed vulputate metus. Integer at diam in
                            dui mattis consectetur sit amet vel nulla. Donec tempor
                            turpis mi, at convallis nulla aliquam vitae.
                            Pellentesque est nibh, imperdiet ut purus at,
                            sodales viverra massa. Mauris eu consequat risus.
                            Morbi mollis condimentum ligula eu sagittis.
                            Phasellus blandit elementum quam at consequat.
                            Nam posuere efficitur congue.
                        </Text>
                        <Text style={MainStyles.termText}>
                            Maecenas tempor elit quam, id eleifend libero pretium et.
                            Aliquam ut libero vel risus mattis ullamcorper.
                            Donec sed quam tortor. Morbi molestie tincidunt quam
                            venenatis auctor. Fusce in volutpat sem. Aliquam pulvinar
                            nisl ac mollis sagittis. Donec dapibus tellus at orci congue,
                            in pellentesque nisi cursus.
                        </Text>
                        <Text style={MainStyles.termText}>
                            Nulla efficitur suscipit erat, id euismod eros convallis
                            venenatis. Praesent sed lacus eros. Sed bibendum porta
                            eros, non varius lectus dignissim nec. Maecenas id tellus
                            eget augue rutrum interdum fringilla sed orci. In et
                            felis ligula. Vivamus tristique convallis lectus in
                            laoreet. Ut eu magna eu metus luctus malesuada. Morbi
                            volutpat pulvinar justo, eget accumsan odio laoreet vel.
                            Pellentesque a nisi dolor. Donec interdum nulla at
                            vulputate blandit. Proin cursus gravida justo, sit amet
                            commodo massa dictum eu. Aenean sed pretium nisi, non
                            porttitor eros. Maecenas lacinia pretium diam, sit amet
                            blandit erat ornare et. Vestibulum malesuada ut purus id elementum.
                        </Text>

                    </View>
                    <BigButton title='Home'
                        onpress={() => navigation.navigate("Home")} />

                </ScrollView>
            </View>
        </View >
    )
}
