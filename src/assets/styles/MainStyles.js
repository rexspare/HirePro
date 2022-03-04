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
    },

    // SERVICES STYLES
    services_Header: {
        color: '#33bd94',
        fontSize: 23,
        fontFamily: 'Metropolis-ExtraBold',
        alignSelf: 'center',
        marginTop: 12
    },
    itemContainer: {
        width: "80%",
        height: 45,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: 13,
        borderRadius: 7
    },
    itemText: {
        fontFamily: 'Metropolis-Medium',
        fontSize: 16
    },

    item_svg: {
        marginHorizontal: 15
    },
    item_svg_S: {
        position: 'absolute',
        right: 15
    },

    // Our STORY STYLES
    small_Text: {
        fontFamily: "Metropolis-Bold",
        fontSize: 18,
        color: '#33BD94'
    },
    large_Text: {
        fontFamily: 'Metropolis-Black',
        fontSize: 20,
        color: '#33BD94'
    },
    Story_Container: {
        width: width,
        backgroundColor: "#FFFFFF"
    }
})

export default MainStyles;