import React,{useState,useEffect} from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Feather';
import { BaseColor } from '@config';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {IEX_API_KEY} from '../../../const';
import style from './style';

export default function Portfolio({ navigation }) {
    let i = 0;
    let val = 0;
    const [positions, setPositions] = useState([])
    const [symbols, setSymbols] = useState([])
    const [shares, setShares] = useState([])
    const [moneyPaid, setMoneyPaid] = useState([])
    const [difference, setDifference] = useState([])
    const [change, setChange] = useState([])
    const [value, setValue] = useState([])
    const [funds, setFunds] = useState()
    const [curr,setCurr] = useState()
    const [fundg, setFundg] = useState()
    const [color, setColor] = useState()
    const [arr, setArr] = useState()
    const reldiff = (a,b) =>{
        return 100 * Math.abs((a - b) / ((a + b) / 2));
    }
    const getFunds = () =>{
        const user = auth().currentUser;
        firestore()
            .collection('users')
            .doc(user.uid)
            .get()
            .then(doc =>{
                setCurr(doc.data()['currentfunds'])
                setFunds(doc.data()['funds'])
                setFundg((doc.data()['currentfunds'] - doc.data()['funds']).toFixed(2))
                if(((doc.data()['currentfunds'] - doc.data()['funds']).toFixed(2)).charAt(0) !== '-'){
                    setColor(BaseColor.greenColor)
                    setArr('sort-up')
                }else{
                    setColor(BaseColor.redColor)
                    setArr('sort-down')
                }
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
                        setPositions(old => [...old, doc.id])
                        setSymbols(old =>[...old, doc.data().symbol])
                        setShares(old =>[...old, doc.data().shares])
                        setMoneyPaid(old =>[...old, doc.data().moneyPaid])
                        getPrice(doc.data().symbol,doc.data().shares, doc.data().moneyPaid);
                        i++;
                    })
                }
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
    useEffect(() => {
        getFunds();
        getPositions();
    }, [])
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
                        <Text style={{ color: BaseColor.whiteColor, marginTop: 10, fontSize: 32, fontWeight: 'bold' }}>${curr}</Text>

                        <Text style={{ color: BaseColor.whiteColor, marginTop: 10, fontSize: 15 }}>TOTAL PORTFOLIO VALUE</Text>
                        <View style={styles.change}>
                            <Icon name={arr} color={color} size={25} />
                            <Text style={{ color: color, marginLeft: 5, marginBottom: color === BaseColor.greenColor ? 12:-5, fontWeight: 'bold' }}>${fundg}</Text>
                        </View>
                    </View>


                </View>

                <Text style={{ color: BaseColor.whiteColor, fontSize: 20, padding: 2, marginTop: 20, marginLeft: 10 }}>Stock Wallet</Text>
                { positions.length >0 ? (positions.map((item,index) =>(
                    <TouchableOpacity style={styles.card4} activeOpacity={0.5} onPress={() => navigation.navigate('Stock')}>
                    <View style={styles.stockstoreRow}>
                        <View style={{ flex: 1 / 3 }}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>{symbols[index]}</Text>
                            <Text style={{ color: BaseColor.greyColor, fontSize: 12 }}>{shares[index]} shares</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text></Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{ color: BaseColor.whiteColor, fontSize: 18 }}>${value[index]}</Text>
                            <Text style={{ color: change[index] !==undefined && change[index].charAt(0) === '-'? BaseColor.redColor:BaseColor.greenColor, fontSize: 14 }}>{change[index]}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                )))
                    :
                    <View style={{alignSelf: 'center', alignItems:'center', marginTop:15}}>
                        <Text style={{ color: BaseColor.whiteColor, fontSize:16}}>No stocks in your portfolio</Text>
                    </View>
            }
                
            </ScrollView>
        </View>
    );
}