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
    },

    // Our CLIENTS STYLES
    heading_Contaiber: {
        width: '85%',
        alignItems: 'center'
    },
    testemonial: {
        fontFamily: "Metropolis-Medium",
        fontSize: 17,
        lineHeight: 20,
        color: '#949494',
        marginVertical: 10
    },

    // CONTACT US STYLES
    Contact_Box: {
        width: 310,
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        marginVertical: 20,
        shadowColor: "#33bd94",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 10,
    },
    contactText: {
        fontFamily: 'Metropolis-Medium',
        color: "#949494",
        marginVertical: 3,
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 16

    },
    contactDet: {
        fontFamily: 'Metropolis-Bold',
        color: '#33BD94',
        fontSize: 18
    },

    // TERMS STYLES
    termText: {
        fontFamily: 'Metropolis-Regular',
        color: "#949494",
        paddingVertical: 10,
        fontSize: 16,
    },
    Input_Container: {
        width: '85%',
        height: 150,
        flexDirection: 'row',
        backgroundColor: "#F2F2F2",
        borderRadius: 7,
        marginTop: 25,
        marginBottom: 30
    },

    inputField: {
        width: '85%',
        height: 50,
        fontFamily: 'Metropolis-Medium',
        fontSize: 14,
        paddingLeft: 15,

    },

    // QOUTE US STYLES

    phoneContainer: {
        width: '85%',
        height: 48,
        backgroundColor: "#F2F2F2",
        marginRight: 10
    },
    textInput: {
        fontFamily: 'Metropolis-Medium',
        fontSize: 30,
        backgroundColor: "#F2F2F2",
        paddingVertical: 0,
    },
    Input_Container1: {
        width: '85%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: "#F2F2F2",
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 25
    },
})

export default MainStyles;