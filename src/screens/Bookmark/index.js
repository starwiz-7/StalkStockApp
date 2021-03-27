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
                        <Text style={styles.homeText}>Bookmarks</Text>
                        <View style={styles.profile}>
                            <Icons name='star' size={20} color={BaseColor.backgroundColor} />
                        </View>
                    </View>


                    {/* <View style={styles.chart}> */}
                    <TouchableOpacity activeOpacity={0.4} style={styles.chart}>
                        <Icons name='trending-up' size={20} color={BaseColor.whiteColor} style={{ fontWeight: 'normal' }} />
                        <Text style={{ color: BaseColor.whiteColor, marginLeft: 10, fontSize: 15 }}>Stonks</Text>
                    </TouchableOpacity>
                    {/* </View> */}
                </View>

                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.card3}>
                        {/* <View style={styles.portfolioRow}>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.greyColor, marginTop: 20, fontWeight: 'bold' }}>Name</Text>
                        </View>
                        <View style={{ flex: 1 / 2 }}>
                            <Text style={{ color: BaseColor.greyColor, marginTop: 20, fontWeight: 'bold' }}>Chart</Text>
                        </View>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.greyColor, marginTop: 20, fontWeight: 'bold' }}>Price</Text>
                        </View>
                    </View> */}

                        {/* <View style={styles.line}></View> */}

                        <View style={styles.bookmarkRow}>
                            <View style={{ flex: 1 / 3 }}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                                <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>Apple Inc</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>                 </Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 22 }}>$200</Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.greenColor, fontSize: 15 }}>+$0.25</Text>
                            </View>
                        </View>





                        {/* <View style={styles.line}></View>
                    <View style={styles.portfolioRow}>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                            <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>400 shares</Text>
                        </View>
                        <View style={{ flex: 1 / 2 }}>
                            <Text>Chartttttttttttttttttttt</Text>
                        </View>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>$200</Text>
                            <Text style={{ color: BaseColor.greenColor, fontSize: 14 }}>+$0.25</Text>
                        </View>
                    </View> */}


                        {/* <Text style={{ marginTop: 15, color: BaseColor.whiteColor, fontSize: 15, fontWeight: 'bold' }}>See more portfolio</Text> */}
                    </View>
                </TouchableOpacity>


                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.card3}>
                        <View style={styles.bookmarkRow}>
                            <View style={{ flex: 1 / 3 }}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                                <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>Apple Inc</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>                 </Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 22 }}>$200</Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.greenColor, fontSize: 15 }}>+$0.25</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.card3}>
                        <View style={styles.bookmarkRow}>
                            <View style={{ flex: 1 / 3 }}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                                <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>Apple Inc</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>                 </Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 22 }}>$200</Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.greenColor, fontSize: 15 }}>+$0.25</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.card3}>
                        <View style={styles.bookmarkRow}>
                            <View style={{ flex: 1 / 3 }}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                                <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>Apple Inc</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>                 </Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 22 }}>$200</Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.greenColor, fontSize: 15 }}>+$0.25</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.card3}>
                        <View style={styles.bookmarkRow}>
                            <View style={{ flex: 1 / 3 }}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                                <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>Apple Inc</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>                 </Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 22 }}>$200</Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.greenColor, fontSize: 15 }}>+$0.25</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.card3}>
                        <View style={styles.bookmarkRow}>
                            <View style={{ flex: 1 / 3 }}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                                <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>Apple Inc</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>                 </Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 22 }}>$200</Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.greenColor, fontSize: 15 }}>+$0.25</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.card3}>
                        <View style={styles.bookmarkRow}>
                            <View style={{ flex: 1 / 3 }}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                                <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>Apple Inc</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>                 </Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 22 }}>$200</Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.greenColor, fontSize: 15 }}>+$0.25</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.card3}>
                        <View style={styles.bookmarkRow}>
                            <View style={{ flex: 1 / 3 }}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                                <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>Apple Inc</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>                 </Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 22 }}>$200</Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.greenColor, fontSize: 15 }}>+$0.25</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.card3}>
                        <View style={styles.bookmarkRow}>
                            <View style={{ flex: 1 / 3 }}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>AAPL</Text>
                                <Text style={{ color: BaseColor.greyColor, fontSize: 14 }}>Apple Inc</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>                 </Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 22 }}>$200</Text>
                            </View>
                            <View style={{ flex: 1 / 2 }} style={styles.priceRow}>
                                <Text style={{ color: BaseColor.greenColor, fontSize: 15 }}>+$0.25</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


            </ScrollView>
        </View>
    );
}