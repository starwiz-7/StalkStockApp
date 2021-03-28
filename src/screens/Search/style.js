import { StyleSheet } from 'react-native';
import { BaseColor } from '@config';
export default StyleSheet.create({
    background: {
        backgroundColor: BaseColor.backgroundColor,
        flex: 1,
        height: '100%',
        width: '100%',
        padding: 1
    },
    header: {
        flexDirection: 'row',
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    search: {
        alignSelf: "center",
        width: "100%",
        borderColor: BaseColor.greyColor

    },

    card: {
        backgroundColor: BaseColor.darkGreenColor,
        // padding: 15,
        height: 60,
        width: '100%',
        borderRadius: 10,
        paddingLeft: 20,
        paddingTop: 5,
        marginBottom: 10
    },

    resulttext: {
        color: BaseColor.whiteColor,
        fontSize: 20,

    },
    searchContainer: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderRadius: 15,
        paddingHorizontal: 15,
        // paddingVertical: 5/,
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'space-between',
        elevation: 5,
        height: 45
    },
    inputStyle: {
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',
    },
})