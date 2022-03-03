import { StyleSheet } from "react-native";

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

    }
})

export default ReusableStyles;