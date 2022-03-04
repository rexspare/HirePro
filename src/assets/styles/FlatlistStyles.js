import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

const FlatListStyles = StyleSheet.create({
    // OUR STORY STYLES
    Box: {
        width: 125,
        height: 120,
        borderRadius: 8,
        margin: 13,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#b4d4cc",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 5,

    },

    numText: {
        fontFamily: 'Metropolis-Bold',
        color: "#33BD94",
        fontSize: 24
    },

    nameText: {
        fontFamily: 'Metropolis-Bold',
        color: "#33BD94",
        fontSize: 11
    },


})

export default FlatListStyles;