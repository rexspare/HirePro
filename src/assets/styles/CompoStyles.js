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
    },

    // MODAL STYLES
    modalContainer: {
        width: '85%',
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#b0b0b0",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    largeText: {
        fontFamily: 'Metropolis-Medium',
        color: '#33BD94',
        fontSize: 20,
        marginVertical: 10
    },
    smallText: {
        fontFamily: 'Metropolis-Medium',
        fontSize: 15,
        marginVertical: 2

    }

})

export default CompoStyles;