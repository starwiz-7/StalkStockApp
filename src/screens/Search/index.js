import  React,{useState,useEffect} from 'react';
import { StyleSheet, View, ScrollView, Text,TextInput,Dimensions, TouchableOpacity} from 'react-native';
import {BaseColor} from '@config';
import Icon from 'react-native-vector-icons/Feather';
import database from '@react-native-firebase/database';
import styles from "./style"
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

export default function Search({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [symbol, setSymbol] = useState([]);
  const [name,setName] = useState([]);
  const [result, setResult] = useState([]);
  const onChangeSearch = query => setSearchQuery(query);
  const _goBack = () => console.log('Went back');

  const getAll = () =>{
      database()
        .ref("/")
        .on('value', snapshot =>{
            snapshot.val().map((index) =>{
                setSymbol(old => [...old, index.symbol])
                setName(old => [...old,index.name]);
            })
        })

  }

  const search = (e) =>{
      console.error(e)
    // const newData = symbol.filter( item =>{
    //     const itemData = `${item.toUpperCase()}`
    //     const text = e.toUpperCase();

    //     return itemData.indexOf(text) > -1;
    // })
    // setResult(newData);
    setResult([])
    const s = `https://ticker-2e1ica8b9.now.sh//keyword/${e}`;
    fetch(s)
    .then(res => res.json())
    .then(response =>{
        setResult(response)
    })
  }
const {height, width} = Dimensions.get('window')
  return (
    <View style={styles.background}>
      <View >
      <View style={styles.searchContainer}>
          <Icon name="search" size={25} color={BaseColor.backgroundColor} />
            <TextInput
                style={[styles.inputStyle],{width:0.75*width}}
                autoCorrect={false}
                placeholder="Search"
                placeholderColor='#12141A50'
                // value={searchQuery}
                onChangeText={(text) =>search(text)}
                />
  
</View>
      </View>
      <ScrollView style={{paddingTop:20,paddingHorizontal:10}}>
        {result.length > 0 ? result.map((item,index) =>(
            <TouchableOpacity activeOpacity={0.6} style = {styles.card} onPress={() => navigation.navigate('Stock',{symbol:item.symbol})}>
            <Text style={styles.resulttext}>{item.symbol}</Text>
            <Text style={{fontSize:13, color:BaseColor.greyColor}}>{item.name}</Text>
            </TouchableOpacity>
        )):
        <Text style={{color:BaseColor.greyColor,alignSelf:'center',marginTop:40}}>No such stock found</Text>
        
        }
        
        
      </ScrollView>


    </View>
  );
};
