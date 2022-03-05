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
    // OUR CLIENTS
    client_Box: {
        width: 310,
        borderRadius: 8,
        padding: 40,
        marginVertical: 13,
        shadowColor: "#b4d4cc",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 5,
    },
    clientDet: {
        flexDirection: 'row'
    },
    clientImg: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 2,
        marginRight: 10
    },
    clientName: {
        fontFamily: 'Metropolis-Bold',
        fontSize: 12,
        color: '#33Bd94'
    },
    clientPos: {
        fontFamily: 'Metropolis-Bold',
        fontSize: 13,
        color: '#33Bd94'
    },

    clientmsg: {
        fontFamily: 'Metropolis-Regular',
        fontSize: 15,
        color: '#949494',
        marginVertical: 10
    }
})

export default FlatListStyles;