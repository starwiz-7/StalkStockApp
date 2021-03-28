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
    card3: {
        marginTop: 10,
        backgroundColor: BaseColor.darkGreenColor,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    portfolioRow: {
        flexDirection: 'row',
        // flex: 1,
        marginTop: 10,
        left: 0,
        right: 0
    },
    stockstoreRow: {
        flexDirection: 'row',
        // flex: 1,
        marginTop: 5,
        left: 0,
        right: 0
    },
    card4: {
        marginTop: 8,
        backgroundColor: BaseColor.darkGreenColor,
        padding: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        height: 250,
        width: 250,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: BaseColor.backgroundColor,
        fontSize: 16,
        fontWeight: 'bold'
    }
});