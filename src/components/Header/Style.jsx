import { StyleSheet, Dimensions } from 'react-native'

export default style  = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 25
    },
    mainLogo: {
        paddingVertical: 12
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 5
    },
    iconButton: {
        margin: 0,
        padding: 0
    }
})