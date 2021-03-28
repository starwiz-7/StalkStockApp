import React,{useState,useEffect} from 'react';
import {View, Text, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {BaseColor} from '@config';
import {IEX_API_KEY} from '../../../const'
import style from './style';

export default function Home({navigation}){
    let i = 0;
    let val = 0;
    const [name, setName] = useState('');
    const [fund, setFund] = useState('');
    const [positions, setPositions] = useState([])
    const [symbols, setSymbols] = useState([])
    const [shares, setShares] = useState([])
    const [moneyPaid, setMoneyPaid] = useState([])
    const [difference, setDifference] = useState([])
    const [change, setChange] = useState([])
    const [value, setValue] = useState([])

    const [stockName, setStockName] = useState([])
    const [stockSymbol, setStockSymbol] = useState([])
    const [stockPrice, setStockPrice] = useState([])
    const [stockChange, setStockChange] = useState([])

    const reldiff = (a,b) =>{
        return 100 * Math.abs((a - b) / ((a + b) / 2));
    }

    const getUser = () =>{
        const user = auth().currentUser;
        firestore()
            .collection('users')
            .doc(user.uid)
            .get()
            .then(doc =>{
                setName(doc.data()['username'])
                setFund(doc.data()['funds'])
            })
    }
    const getPrice = (symbol,share,money) => {
        console.error(symbol)
        const lastPrice = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?displayPercent=true&token=${IEX_API_KEY}`;
        fetch(lastPrice)
        .then(res => res.json())
        .then(result => {
            console.error(result.latestPrice)
            console.error(shares[i])
            val = (
                Number(share * result.latestPrice).toFixed(2))
                console.error(val)
            setValue(old => [...old, val])
        })
        .then(() =>{
            console.error(val)
            setChange(old => [...old,
              parseFloat(
                val - parseFloat(money),
              ).toFixed(2),
            ])
            
        })
    }
    const getPositions = () =>{
        setPositions([])
        setSymbols([])
        setShares([])
        setMoneyPaid([])
        setValue([])
        setDifference([])
        setChange([])
        const user = auth().currentUser;
        firestore()
            .collection('users')
            .doc(user.uid)
            .collection('stocks')
            .onSnapshot(snapshot =>{
                if(snapshot.docs.length !== 0){
                    snapshot.forEach(doc => {
                        if(i<=3){
                        setPositions(old => [...old, doc.id])
                        setSymbols(old =>[...old, doc.data().symbol])
                        setShares(old =>[...old, doc.data().shares])
                        setMoneyPaid(old =>[...old, doc.data().moneyPaid])
                        getPrice(doc.data().symbol,doc.data().shares, doc.data().moneyPaid);
                        i++;}
                    })
                }
            })
    }

    const getTrending = () =>{
        setStockSymbol([])
        setStockPrice([])
        setStockName([])
        setStockChange([])
		const stocks = `https://cloud.iexapis.com/stable/stock/market/list/mostactive?token=${IEX_API_KEY}`;
        fetch(stocks)
        .then((res) => res.json())
        .then((result) =>{
            for(let i = 0;i<4;i++){
                setStockSymbol(old => [...old, result[i].symbol])
                setStockName(old => [...old, result[i].companyName])
                setStockPrice(old => [...old, result[i].latestPrice])
                setStockChange(old => [...old, result[i].changePercent.toFixed(2)])
            }
        })

    }
    useEffect(() => {
        getUser();
        getPositions();
        getTrending();
    },[])
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
            
            <Text style={[styles.homeText,{marginBottom:-10}]}>Hi, {name}</Text>
            <Text style={{color:BaseColor.greyColor, marginTop:20, fontWeight:'bold'}}>Current Value</Text>
            <Text style={{color:BaseColor.whiteColor, marginTop:10, fontSize:32, fontWeight:'bold'}}>${fund}</Text>
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
                { positions.length >0 ? positions.map((item, index) =>(
                    <View>
                    <View style={styles.portfolioRow}>
                    <View style={{flex:1/3}}>
                        <Text style={{color:BaseColor.whiteColor, fontSize:18}}>{symbols[index]}</Text>
                        <Text style={{color:BaseColor.greyColor, fontSize:12}}>{shares[index]} shares</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text>Chartttttttttttttttttttt</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{color:BaseColor.whiteColor, fontSize:18}}>${value[index]}</Text>
                        <Text style={{color: change[index] !==undefined && change[index].charAt(0) === '-'? BaseColor.redColor:BaseColor.greenColor, fontSize:14}}>{change[index]}</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                </View>
                )):<Text style={{alignItems:'center', justifyContent: 'center', fontSize:15, color:BaseColor.whiteColor}}>No</Text>}
                
                {positions.length>0?<TouchableOpacity activeOpacity={0.5} onPress = {() => navigation.navigate('Portfolio')}>
                <Text style={{marginTop:15, color:BaseColor.whiteColor, fontSize:15, fontWeight:'bold'}}>See more portfolio</Text>
                </TouchableOpacity>: <View></View>}
            </View>
            <View style={styles.card2}>
                <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    
                <Icons name='trending-up' size={25} color={BaseColor.whiteColor} style={{fontWeight:'normal'}}/>
                <Text style={{marginLeft:10, fontSize:20, color:BaseColor.whiteColor}}>Trending🔥</Text>
                </View>
                {stockSymbol.length >0 ? stockSymbol.map((item,index)=>(
                    <View>
                    <View style={styles.portfolioRow}>
                        <View style={{flex:1/3}}>
                            <Text style={{color:BaseColor.whiteColor, fontSize:18}}>{item}</Text>
                            <Text style={{color:BaseColor.greyColor, fontSize:10}}>{stockName[index]}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text>Chartttttttttttttttttttt</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{color:BaseColor.whiteColor, fontSize:18}}>${stockPrice[index]}</Text>
                            <Text style={{color: stockChange[index]!==undefined && stockChange[index].charAt(0) !== '-'  ?BaseColor.greenColor: BaseColor.redColor, fontSize:14}}>{stockChange[index]}</Text>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    </View>
                ))
                    :
                <Text style={{alignSelf:'center', justifyContent: 'center', fontSize:16, color:BaseColor.whiteColor}}>Cannot Fetch Records :(</Text>
            }
                
            </View>
            </ScrollView>
        </View>
    );
}