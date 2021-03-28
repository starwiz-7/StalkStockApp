import { StyleSheet } from 'react-native';
import { BaseColor } from '@config';

export default StyleSheet.create({
    background: {
        backgroundColor: BaseColor.backgroundColor,
        flex: 1,
        height: '100%',
        width: '100%',
        padding: 5
    },
    tophalf: {
        backgroundColor: BaseColor.darkGreenColor,
    },
    header: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: 10,
        paddingHorizontal: 10
    },
    card: {
        flexDirection: 'row',
        backgroundColor: BaseColor.darkGreenColor,
        padding: 20,
        textAlign: 'center',
        height: '15%',
        width: '100%',
    },

    title: {
        textAlign: "left",
        color: BaseColor.whiteColor,
        fontSize: 25,
        padding: 10,
        paddingBottom: 10,
        fontWeight: "bold"
    },

    subtitle: {
        textAlign: 'left',
        color: BaseColor.greyColor,
        fontSize: 15,
        padding: 0,
        paddingLeft: 10
    },

    currentvalue: {
        textAlign: 'left',
        color: BaseColor.whiteColor,
        fontSize: 35,
        fontWeight: 'bold',
        padding: 10
    },

    profit: {
        flexDirection: 'row',
        color: BaseColor.greenColor,
        paddingLeft: 10,
        fontSize: 20
    },

    chart: {
        height: "50%",
        width: "100%",
        paddingHorizontal: 10
    },

    container: {
        flexDirection: 'row',
    },
    buttonContainer: {
        margin: 5
    },
})