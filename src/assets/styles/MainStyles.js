import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen')

const MainStyles = StyleSheet.create({
    // HOME SCREEN STYLES
    Home_Container: {
        width: width,
        height: height,
        backgroundColor: "#FFFFFF"
    },
    home_Body: {
        width: width,
        alignItems: 'center'
    },

    header_text: {
        color: '#33bd94',
        fontSize: 22,
        fontFamily: 'Metropolis-ExtraBold',
    },
    header_text_S: {
        color: '#33bd94',
        fontSize: 18,
        fontFamily: 'Metropolis-Bold',

    },
    det_text: {
        fontFamily: 'Metropolis-Bold',
        fontSize: 18,
        color: '#565656',
        marginTop: 5
    },
    Main_btn: {
        alignItems: 'center',
        marginTop: 45,
    }
})

export default MainStyles;