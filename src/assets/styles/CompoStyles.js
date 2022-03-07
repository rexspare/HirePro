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

    },

    subServiceText: {
        fontFamily: 'Metropolis-Bold',
        fontSize: 18,
        marginLeft: 13,
        marginTop: 7,
        marginBottom: -7
    },
    // BOTTOM SHEET STYLES
    bs_container: {
        backgroundColor: 'white',
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        alignItems: 'center',
        height: 720,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderColor: '#949494'
    },
    bs_icon: {
        position: 'absolute',
        top: 10,
        right: 15
    },

    bs_heading: {
        fontFamily: 'Metropolis-Bold',
        fontSize: 20,
        marginTop: 15,
        color: '#565656'
    },
    bs_text: {
        fontFamily: 'Metropolis-Regular',
        fontSize: 16,
        color: '#949494',
        marginTop: 12,
        lineHeight: 20,
        height: 180
    },
    bs_SmallHeading: {
        fontFamily: 'Metropolis-Medium',
        fontSize: 18,
        color: '#565656',
        marginTop: 10,
        right: 100
    },

    smallButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 10
    },
    priceCaption: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
        marginVertical: 10
    }

})

export default CompoStyles;