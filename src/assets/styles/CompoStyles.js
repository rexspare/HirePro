import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen')

const CompoStyles = StyleSheet.create({
    // Stories Styles
    Stories_box: {
        alignItems: 'center',
        width: "78%",
        marginVertical: 15,
    },
    story_Header: {
        fontFamily: "Metropolis-ExtraBold",
        fontSize: 22,
        color: '#33BD94',
    },
    small_heading: {
        fontFamily: "Metropolis-Bold",
        fontSize: 18,
        color: '#33BD94'
    },
    Story_Text: {
        fontFamily: 'Metropolis-Medium',
        fontSize: 14,
        color: '#33BD94',
        marginVertical: 10
    }

})

export default CompoStyles;