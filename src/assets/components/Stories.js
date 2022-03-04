import { View, Text } from 'react-native'
import React from 'react'
import CompoStyles from '../styles/CompoStyles'

export default function Stories() {
    return (
        <View style={CompoStyles.Stories_box}>

            <Text style={CompoStyles.story_Header}>Our “Success Story”</Text>

            <Text style={CompoStyles.Story_Text}>
                Believe us or not! It’s not a castle in the sky but a truth!
                We have started with honesty, dedication, and professionalism
                so now we are protecting our clients’ trust in order to provide the best we have.
            </Text>
            <Text style={CompoStyles.Story_Text}>
                We have earned the trust of over 20 clients worldwide.
                HirePro is blessed with quality 150+ resources equipped with
                the perfect set of abilities to revolutionize our client’s businesses with IT
                in order to fulfill their needs ina professional manner.</Text>

            <View style={{ alignItems: 'center' }}>
                <Text style={CompoStyles.small_heading}>There must be a question!</Text>
                <Text style={CompoStyles.story_Header}> “Why would we have a </Text>
                <Text style={[CompoStyles.story_Header, { fontSize: 19 }]}>high satisfaction rate?”</Text>
            </View>

            <Text style={[CompoStyles.Story_Text, { marginBottom: 150 }]}>
                The answer is simple; we have hired our resources by focusing on Quality,
                not just quantity. After a thorough interview,
                we hire professionals like  our name says “HirePro”.
            </Text>

        </View>
    )
}