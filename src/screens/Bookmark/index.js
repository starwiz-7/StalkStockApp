import React,{useEffect,useState} from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { BaseColor } from '@config';
import {IEX_API_KEY} from '../../../const';
import style from './style';


export default function Home({ navigation }) {
    // let watchlist =
    const [watchlist, setWatchlist] = useState([]);
    const [value, setValue] = useState([]);
    const [change, setChange] = useState([]);
    const [stock, setStock] = useState([]);
    const getPrice = () =>{
        let symbols = "";
        setValue([]);
        setChange([]);
        setStock([]);
        if(watchlist.length !== 0){
            symbols += watchlist[0]
            for(let i = 1; i < watchlist.length; i++){
                symbols += ",";
                symbols += watchlist[i];
            }
            const latestPrice = `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote&token=${IEX_API_KEY}`
            fetch(latestPrice)
            .then(res => res.json())
            .then(result =>{
                for(let i=0;i<watchlist.length;i++){
                    if(result[watchlist[i]].quote.latestPrice !== null){
                        setValue(old => [...old,result[watchlist[i]].quote.latestPrice.toFixed(2)])
                        setChange(old => [...old,parseFloat(result[watchlist[i]].quote.changePercent).toFixed(2)])
                        setStock(old => [...old,result[watchlist[i]].quote.companyName])
                        
                    }
                }
            })
        }
    }
    const getWatchlist = () =>{
        const user = auth().currentUser;
        if(user !== undefined){
            firestore()
                .collection('users')
                .doc(user.uid)
                .onSnapshot(doc =>{
                    let watch = doc.data()['watchlist'];
                    setWatchlist(watch)
                })
        }
    }
    useEffect(() => {
        getWatchlist();
    }, [])

    useEffect(() =>{
        getPrice();
    }, [watchlist])
    return (
        <View style={styles.background}>
            <ScrollView>
                <StatusBar backgroundColor={BaseColor.darkGreenColor} />
                <View style={styles.card1}>
                    <View style={styles.header}>
                        <Text style={styles.homeText}>Watchlist</Text>
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
                {watchlist.length >0 ? watchlist.map((item,index) =>(
                    <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.card3}>

                        <View style={styles.bookmarkRow}>
                            <View style={{ flex: 1 / 3 }}>
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>{item}</Text>
                                <Text style={{ color: BaseColor.greyColor, fontSize: 12 }}>{stock[index]}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>                 </Text>
                            </View>
                            <View style={{ flex: 1 / 2, alignItems: 'center'}} >
                                <Text style={{ color: BaseColor.whiteColor, fontSize: 22 }}>${value[index]}</Text>
                                <Text style={{ color: change[index] !== undefined && change[index].charAt(0) === '-' ? BaseColor.redColor : BaseColor.greenColor, fontSize: 15 }}>{change[index]}%</Text>
                            </View>
                        </View>
                        </View>
                </TouchableOpacity>
                )):
                <View style={{alignSelf: 'center', alignItems:'center', marginTop:15}}>
                    <Text style={{fontSize:16, color:BaseColor.whiteColor}}>No stocks in watchlist!!!</Text>
                </View>
                }
                


                


            </ScrollView>
        </View>
    );
}