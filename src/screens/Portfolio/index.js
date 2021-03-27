import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Feather';
import { BaseColor } from '@config'
import style from './style';

export default function Home({ navigation }) {

    return (
        <View style={styles.background}>
            <ScrollView>
                <StatusBar backgroundColor={BaseColor.darkGreenColor} />
                <View style={styles.card1}>
                    <View style={styles.header}>
                        <Text style={styles.homeText}>Portfolio</Text>
                        <View style={styles.profile}>
                            <Icons name='briefcase' size={20} color={BaseColor.backgroundColor} />
                        </View>
                    </View>

                    <View style={style.card3}>
                        <Text style={{ color: BaseColor.whiteColor, marginTop: 10, fontSize: 32, fontWeight: 'bold' }}>$20,12,000</Text>

                        <Text style={{ color: BaseColor.whiteColor, marginTop: 10, fontSize: 15 }}>TOTAL PORTFOLIO VALUE</Text>
                        <View style={styles.change}>
                            <Icon name='sort-up' color={BaseColor.greenColor} size={25} />
                            <Text style={{ color: BaseColor.greenColor, marginLeft: 5, marginBottom: 12, fontWeight: 'bold' }}>+$10.2(+3.4%)</Text>
                        </View>
                    </View>


                </View>

                <Text style={{ color: BaseColor.whiteColor, fontSize: 20, padding: 2, marginTop: 20, marginLeft: 10 }}>Stock Wallet</Text>

                <View style={styles.card4}>
                    <View style={styles.stockstoreRow}>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                            <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>400 shares</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text></Text>
                        </View>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>$200</Text>
                            <Text style={{ color: BaseColor.greenColor, fontSize: 14 }}>+$0.25</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card4}>
                    <View style={styles.stockstoreRow}>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                            <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>400 shares</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text></Text>
                        </View>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>$200</Text>
                            <Text style={{ color: BaseColor.greenColor, fontSize: 14 }}>+$0.25</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card4}>
                    <View style={styles.stockstoreRow}>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                            <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>400 shares</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text></Text>
                        </View>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>$200</Text>
                            <Text style={{ color: BaseColor.greenColor, fontSize: 14 }}>+$0.25</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card4}>
                    <View style={styles.stockstoreRow}>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                            <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>400 shares</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text></Text>
                        </View>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>$200</Text>
                            <Text style={{ color: BaseColor.greenColor, fontSize: 14 }}>+$0.25</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card4}>
                    <View style={styles.stockstoreRow}>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                            <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>400 shares</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text></Text>
                        </View>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>$200</Text>
                            <Text style={{ color: BaseColor.greenColor, fontSize: 14 }}>+$0.25</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card4}>
                    <View style={styles.stockstoreRow}>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                            <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>400 shares</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text></Text>
                        </View>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>$200</Text>
                            <Text style={{ color: BaseColor.greenColor, fontSize: 14 }}>+$0.25</Text>
                        </View>
                    </View>
                </View>


            </ScrollView>
        </View>
    );
}