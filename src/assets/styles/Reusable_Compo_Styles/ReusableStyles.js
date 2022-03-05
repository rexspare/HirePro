import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen')

const ReusableStyles = StyleSheet.create({
    // BIG BUTTON STYLES
    button_Container: {
        backgroundColor: "#33BD94",
        borderRadius: 7,
        width: 300,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,

    },
    Button_text: {
        fontFamily: "Metropolis-Black",
        fontSize: 16,
        color: '#FFFFFF',

    },

    // HEADER STYLES
    header_Container: {
        backgroundColor: '#FFFFFF',
        width: width,
        height: height * 0.07,
        justifyContent: 'center',
        paddingLeft: 20
    },

    // INPUTFILEDS STYLES
    Input_Container: {
        width: '85%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#F2F2F2",
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },

    inputField: {
        width: '85%',
        height: 50,
        fontFamily: 'Metropolis-Medium',
        fontSize: 14,
        paddingLeft: 15

    }
})

export default ReusableStyles;