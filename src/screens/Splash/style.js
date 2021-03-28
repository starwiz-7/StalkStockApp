import { StyleSheet } from 'react-native';
import { BaseColor } from '@config'

export default StyleSheet.create({
    background: {
        backgroundColor: BaseColor.backgroundColor,
        flex: 1,
        height: '100%',
        width: '100%',
        padding: 5
    },
    card1: {
        marginTop: 15,
        backgroundColor: BaseColor.darkGreenColor,
        padding: 20
    },
    header: {
        flexDirection: 'row',
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    homeText: {
        fontSize: 25,
        color: BaseColor.whiteColor
    },
    profile: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: BaseColor.whiteColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    change: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: BaseColor.whiteColor,
        opacity: 0.3,
        marginTop: 10
    },
    chart: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 0,
        marginTop: 10
    },
    card2: {
        marginTop: 10,
        backgroundColor: BaseColor.darkGreenColor,
        padding: 20
    },
    portfolioRow: {
        flexDirection: 'row',
        // flex: 1,
        marginTop: 10,
        left: 0,
        right: 0
    },
    card4: {
        flexDirection: 'row',
        marginTop: 13,
        backgroundColor: BaseColor.darkGreenColor,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    share: {
        color: 'black',
        fontSize: 18,
        backgroundColor: '#f2f2f2',
        padding: 4,
        borderColor: 'black',
        borderRadius: 5,
        paddingLeft: 10,
    },
    input: {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 6,
        margin: 5

    }
});