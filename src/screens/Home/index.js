import React from 'react';
import {View, Text, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Feather';
import {BaseColor} from '@config'
import style from './style';

export default function Home({navigation}){
    
    return(
        <View style={styles.background}>
            <ScrollView>
            <StatusBar backgroundColor={BaseColor.darkGreenColor}/>
            <View style={styles.card1}>
            <View style={styles.header}>
                <Text style={styles.homeText}>Home</Text>
                <View style={styles.profile}>
                <Icons name='user' size={20} color={BaseColor.backgroundColor}/>
                </View>
            </View>
            <Text style={{color:BaseColor.greyColor, marginTop:20, fontWeight:'bold'}}>Current Value</Text>
            <Text style={{color:BaseColor.whiteColor, marginTop:10, fontSize:32, fontWeight:'bold'}}>$20,12,000</Text>
            <View style={styles.change}>
                <Icon name='sort-up' color={BaseColor.greenColor} size={25}/>
                <Text style={{color:BaseColor.greenColor, marginLeft:5, marginBottom:12, fontWeight:'bold'}}>+$10.2(+3.4%)</Text>
            </View>
            <View style={styles.line}></View>
            {/* <View style={styles.chart}> */}
                <TouchableOpacity activeOpacity={0.4} style={styles.chart}>
                <Icons name='trending-up' size={20} color={BaseColor.whiteColor} style={{fontWeight:'normal'}}/>
                <Text style={{color:BaseColor.whiteColor, marginLeft:10, fontSize:15}}>Open Chart</Text>
                </TouchableOpacity>
            {/* </View> */}
            </View>
            <View style={styles.card2}>
                <Text style={{color:BaseColor.whiteColor, fontSize:20}}>Your Portfolios</Text>
                <View style={styles.portfolioRow}>
                    <View style={{flex:1/3}}>
                        <Text style={{color:BaseColor.whiteColor, fontSize:18}}>AAPL</Text>
                        <Text style={{color:BaseColor.greyColor, fontSize:14}}>400 shares</Text>
                    </View>
                    <View style={{flex:1/2}}>
                        <Text>Chartttttttttttttttttttt</Text>
                    </View>
                    <View style={{flex:1/3}}>
                        <Text style={{color:BaseColor.whiteColor, fontSize:18}}>$200</Text>
                        <Text style={{color: BaseColor.greenColor, fontSize:14}}>+$0.25</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.portfolioRow}>
                    <View style={{flex:1/3}}>
                        <Text style={{color:BaseColor.whiteColor, fontSize:18}}>AAPL</Text>
                        <Text style={{color:BaseColor.greyColor, fontSize:14}}>400 shares</Text>
                    </View>
                    <View style={{flex:1/2}}>
                        <Text>Chartttttttttttttttttttt</Text>
                    </View>
                    <View style={{flex:1/3}}>
                        <Text style={{color:BaseColor.whiteColor, fontSize:18}}>$200</Text>
                        <Text style={{color: BaseColor.greenColor, fontSize:14}}>+$0.25</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <TouchableOpacity activeOpacity={0.5}>
                <Text style={{marginTop:15, color:BaseColor.whiteColor, fontSize:15, fontWeight:'bold'}}>See more portfolio</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.card2}>
                <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    
                <Icons name='trending-up' size={25} color={BaseColor.whiteColor} style={{fontWeight:'normal'}}/>
                <Text style={{marginLeft:10, fontSize:20, color:BaseColor.whiteColor}}>Trending🔥</Text>
                </View>
                <View style={styles.portfolioRow}>
                    <View style={{flex:1/3}}>
                        <Text style={{color:BaseColor.whiteColor, fontSize:18}}>AAPL</Text>
                        <Text style={{color:BaseColor.greyColor, fontSize:14}}>400 shares</Text>
                    </View>
                    <View style={{flex:1/2}}>
                        <Text>Chartttttttttttttttttttt</Text>
                    </View>
                    <View style={{flex:1/3}}>
                        <Text style={{color:BaseColor.whiteColor, fontSize:18}}>$200</Text>
                        <Text style={{color: BaseColor.greenColor, fontSize:14}}>+$0.25</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.portfolioRow}>
                    <View style={{flex:1/3}}>
                        <Text style={{color:BaseColor.whiteColor, fontSize:18}}>AAPL</Text>
                        <Text style={{color:BaseColor.greyColor, fontSize:14}}>400 shares</Text>
                    </View>
                    <View style={{flex:1/2}}>
                        <Text>Chartttttttttttttttttttt</Text>
                    </View>
                    <View style={{flex:1/3}}>
                        <Text style={{color:BaseColor.whiteColor, fontSize:18}}>$200</Text>
                        <Text style={{color: BaseColor.greenColor, fontSize:14}}>+$0.25</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.portfolioRow}>
                    <View style={{flex:1/3}}>
                        <Text style={{color:BaseColor.whiteColor, fontSize:18}}>AAPL</Text>
                        <Text style={{color:BaseColor.greyColor, fontSize:14}}>400 shares</Text>
                    </View>
                    <View style={{flex:1/2}}>
                        <Text>Chartttttttttttttttttttt</Text>
                    </View>
                    <View style={{flex:1/3}}>
                        <Text style={{color:BaseColor.whiteColor, fontSize:18}}>$200</Text>
                        <Text style={{color: BaseColor.greenColor, fontSize:14}}>+$0.25</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
            </View>
            </ScrollView>
        </View>
    );
}