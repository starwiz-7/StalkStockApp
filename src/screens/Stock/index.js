import * as React from 'react';
// import { Searchbar, Appbar } from 'react-native-paper';
import { StyleSheet, View, ScrollView, Text, Button , TouchableOpacity} from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts';
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome5'
import {BaseColor} from '@config'

export default function Stock({ navigation}) {
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, 56]
  const apiKeys = [
	"SAOS0Y8B63XM4DPK",
	"4LPH6E70R1XQR2L5",
	"NOBPQ2OPX7E1XRT3",
	"7V0Q0N46CBIPHA2K",
];
  return (
     <ScrollView style={styles.background}>
  <View>
    <View style={styles.tophalf}>
        <View style={styles.header}>
            <Icon name='chevron-left' size={20} color={BaseColor.whiteColor} onPress={() => navigation.goBack()}/>
            <TouchableOpacity activeOpacity={0.4} style={{borderRadius:20, borderWidth:1, borderColor:BaseColor.whiteColor,paddingHorizontal:10,paddingVertical:5, flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color:BaseColor.whiteColor, marginRight:5}}>Follow</Text>
                <Icon name="star" color={BaseColor.whiteColor} size={20} />
            </TouchableOpacity>
        </View>
        <View>
        <Text style={styles.title}>BBRI</Text>
        </View>
        <View>
          <Text style = {styles.subtitle}> PT Bank Rakyat Indonesia (Persero) Tbk </Text></View>
          <View style={{ flex: 1/4 }}>
                            <Text></Text>
                        </View>
    <Text style = {styles.currentvalue}>Rs 3170 </Text>
    <Text style = {styles.profit}>Rs 271673(+5.98%)</Text>
  
  <LineChart
    style={{ height: 150, paddingHorizontal:10 }}
    data={data}
    // showGrid={true}
    svg={{ stroke: BaseColor.greenColor,strokeWidth:2 }}
    // style={{backgroundColor:BaseColor.}}
    contentInset={{ top: 20, bottom: 20 }}
    animate={true}
    animationDuration={200}
    >
    {/* <Grid /> */}
  </LineChart>


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
  );
};
