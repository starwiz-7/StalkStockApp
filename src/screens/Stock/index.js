import React,{useState,useEffect} from 'react';
// import { Searchbar, Appbar } from 'react-native-paper';
import { StyleSheet, View, ScrollView, Text, Button , TouchableOpacity,Dimensions, Modal, Pressable,TextInput} from 'react-native';
// import { LineChart, Grid } from 'react-native-svg-charts';
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome5'
import {BaseColor} from '@config'
import { VictoryLine } from "victory-native";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {IEX_API_KEY} from '../../../const';

export default function Stock({route, navigation}) {

  const symbol = route.params.symbol;
  const apiKeys = [
	"SAOS0Y8B63XM4DPK",
	"4LPH6E70R1XQR2L5",
	"NOBPQ2OPX7E1XRT3",
	"7V0Q0N46CBIPHA2K",
];
const {height,width} = Dimensions.get('window');
const [data,setData] = useState([])
const [name,setName] = useState()
const [price,setPrice] = useState()
const [change,setChange] = useState()
const [percent,setPercent] = useState()
const [color,setColor] = useState(1)
const [modalVisible, setModalVisible] = useState(false);
const [quantity,setQuantity] = useState(0)
const [tick,setTick] = useState('')
const getChart = () =>{
  setData([]);
  const s = JSON.stringify(symbol)
  const symb = s.substring(1,s.length-1)
  const stock = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symb}&interval=1min&apikey=${apiKeys[0]}`;
  fetch(stock)
    .then((res) => res.json())
    .then((result) => {
      if(typeof result['Note'] === 'undefined'){
        for(let i =
          Object.keys(result["Time Series (1min)"])
            .length - 1;
        i > 0;
        i--){
          setData(old => [...old, parseFloat(
            result["Time Series (1min)"][
              Object.keys(
                result["Time Series (1min)"]
              )[parseInt(i)]
            ]["4. close"]
          ).toFixed(2)])
        }
      }
    })
}
  const getPrice = () =>{
    const s = JSON.stringify(symbol)
    const symb = s.substring(1,s.length-1)
    console.error(symb)
    fetch(`https://cloud.iexapis.com/stable/stock/${symb}/quote?displayPercent=true&token=${IEX_API_KEY}`)
    .then((res) => res.json())
    .then((result) => {
      setName(result.companyName);
      setPercent(result.changePercent.toFixed(2))
      setChange(result.change.toFixed(2))
      setPrice(result.latestPrice.toFixed(2))
    })
  }

  const handleBuy = (num) =>{
    const s = JSON.stringify(symbol)
    const symb = s.substring(1,s.length-1)
    const user = auth().currentUser.uid;
    let positionsNumber;
    let fund;
    firestore()
      .collection('users')
        .doc(user)
        .get()
        .then((doc) => {
          positionsNumber = doc.data()["positions"];
          fund = doc.data()["currentfunds"]
        })
          .then(() => {
            console.error(fund)
            firestore()
              .collection('users')
              .doc(user)
              .collection("stocks")
              .doc("Position"+positionsNumber)
              .set({
                symb,
                moneyPaid:( Number(num) * Number(price)).toFixed(2),
                shares:num,
                value:( Number(num)*Number(price)).toFixed(2)
              })

          })
        .then(() =>{
          firestore()
          .collection("users")
          .doc(user)
          .update({
            currentfunds:(
              Number(fund) - Number(num)*Number(price)
            ).toFixed(2),
            positions: Number(positionsNumber)+1,
          })
        })
        .then(() =>{
          console.error("close")
          setModalVisible(!modalVisible)
        })
  }
  useEffect(() => {
    const s = JSON.stringify(symbol)
    setTick(s.substring(1,s.length-1))
    getPrice();
    getChart();
  },[])
  return (
    <View style={styles.background}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <Text style={styles.modalText}>Enter shares:</Text>
            <TextInput style={{borderWidth:1, borderColor:BaseColor.backgroundColor,width:200,alignSelf:'center',borderRadius:10}}
              placeholder="Shares"
              value={quantity}
              keyboardType='numeric'
              onChangeText={(text) =>setQuantity(text)}
            />
            <View style={{flexDirection:'row',alignItems:'center',justifyContent: 'space-evenly',left:0,right:0,flex:1}}>
            <Pressable
              style={{backgroundColor:BaseColor.redColor, width:80,height:40, marginTop:10,alignItems:'center',justifyContent: 'center',borderRadius:10}}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{color:BaseColor.backgroundColor, fontSize:16}}>Cancel</Text>
            </Pressable>
            <Pressable
              style={{backgroundColor:BaseColor.greenColor, width:80,height:40, marginTop:10,alignItems:'center',justifyContent: 'center',borderRadius:10,marginLeft:30}}
              onPress={() => handleBuy(quantity)}
            >
              <Text style={{color:BaseColor.backgroundColor, fontSize:16}}>Buy</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
     <ScrollView style={styles.background}>
  <View>
    <View style={styles.tophalf}>
        <View style={styles.header}>
            <Icon name='chevron-left' size={20} color={BaseColor.whiteColor} onPress={() => navigation.goBack()}/>
            <TouchableOpacity activeOpacity={0.4} style={{borderRadius:20, borderWidth:1, borderColor:BaseColor.whiteColor,paddingHorizontal:10,paddingVertical:5, flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:BaseColor.whiteColor, marginRight:5}}>Follow</Text>
                <Icon name="star" color={BaseColor.whiteColor} size={15} />
            </TouchableOpacity>
        </View>
        <View>
        <Text style={styles.title}>{tick}</Text>
        </View>
        <View>
          <Text style = {styles.subtitle}> {name} </Text></View>
                            {/* <View style={{ flex: 1/4 }}>
                                              <Text></Text>
                                          </View> */}
    <Text style = {styles.currentvalue}>${price} </Text>
    <Text style = {[styles.profit,percent !== undefined && percent.charAt(0) === '-' ? {color:BaseColor.redColor}:{color:BaseColor.greenColor}]}>${change}({percent}%)</Text>
  {data.length > 0?
  <VictoryLine
  style={{
    data: { stroke: percent !== undefined && percent.charAt(0) === '-' ? BaseColor.redColor : BaseColor.greenColor},
  }}
  padding={{left:20, right:20,bottom:10,top:10}}
  height={150}
  // width={400}
  data={data}
/>:<Text style={{color: BaseColor.whiteColor, alignSelf:'center', marginTop:30,marginBottom:40}}>Fetching...</Text>}
    </View>

      <View>
        <Text style={{ flex: 1/2 }}></Text>
      </View>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.buttonContainer}>
        <Button title="Summary" color='BaseColor.darkGreenColor'>Summary</Button>
        </View>
        <View style={styles.buttonContainer}>
        <Button title="News" color='BaseColor.darkGreenColor'>News</Button>
        </View>
        <View style={styles.buttonContainer}>
        <Button title="Conversations" color='BaseColor.darkGreenColor'>Conversations</Button>
        </View>
        <View style={styles.buttonContainer}>
        <Button title="Statistics" color='BaseColor.darkGreenColor'>Statistics</Button>
        </View>        
      </ScrollView>
    
    
    </View>
  </ScrollView>
  <TouchableOpacity activeOpacity={0.6} style={[styles.button,{width:0.85*width}]} onPress={() => setModalVisible(true)}>
    <Text style={{color: BaseColor.backgroundColor, alignSelf: 'center',fontSize:17,fontWeight:'bold'}}>Trade</Text>
  </TouchableOpacity>
  </View>
  );
};
