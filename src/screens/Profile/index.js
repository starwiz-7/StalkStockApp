import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Feather';
import { BaseColor } from '@config'
import style from './style';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function Home({ navigation }) {
    const [text, onChangeText] = useState("");
    const [name,setName] = useState('');
    const [value,setValue] = useState('');
    const [mail,setMail] = useState('');
    const getDetails = () =>{
        const user = auth().currentUser.uid;
        firestore()
            .collection('users')
            .doc(user)
            .get()
            .then((doc) =>{
                setName(doc.data()['username'])

                setValue(doc.data()['funds'])
                setMail(doc.data()['email'])
            })
    }
    const logout = () =>{
        auth()
            .signOut()
            .then(()=>{
                navigation.navigate('Login')
            })
    }
    useEffect(() => {
        getDetails();
    },[])
    return (
        <View style={styles.background}>
            <ScrollView>
                <StatusBar backgroundColor={BaseColor.darkGreenColor} />
                <View style={styles.card1}>
                    <View style={styles.header}>
                        <Text style={{ color: BaseColor.whiteColor, marginTop: 10, fontSize: 32, fontWeight: 'bold' }}>
                            <Text>Hey </Text>
                            <Text style={{ color: BaseColor.greenColor }}>{name}</Text>
                        </Text>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => logout()}>
                            <View style={styles.profile}>
                                <Icons name='log-out' size={20} color={BaseColor.backgroundColor} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: BaseColor.greyColor, marginTop: 20, fontWeight: 'bold' }}>Total Account Value</Text>
                    <Text style={{ color: BaseColor.whiteColor, marginTop: 10, fontSize: 32, fontWeight: 'bold' }}>${value}</Text>
                </View>
                <View style={styles.card2}>
                    <Text style={{ color: BaseColor.whiteColor, fontSize: 20 }}>Registered Email Address</Text>
                    <View style={styles.portfolioRow}>
                        <Text style={{ color: BaseColor.greyColor, fontSize: 17 ,alignSelf:'center'}}>{mail}</Text>
                    </View>
                </View>

                <View style={styles.card2}>
                    <Text style={{ color: BaseColor.whiteColor, fontSize: 20 }}>Password</Text>
                    <View style={styles.portfolioRow}>
                        <Text style={{ color: BaseColor.greyColor, fontSize: 17 }}>*********</Text>
                    </View>
                </View>




                <View style={styles.card2}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>

                        <Icons name='trending-up' size={25} color={BaseColor.whiteColor} style={{ fontWeight: 'normal' }} />
                        <Text style={{ marginLeft: 10, fontSize: 20, color: BaseColor.whiteColor }}>Refer to friends and Earn</Text>
                    </View>
                    <View style={styles.card4}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.share}>www.sharethis.me/183912</Text>
                        </View>

                        <View style={{ flex: 1 / 2 }}>
                            <TouchableOpacity activeOpacity={0.5} >
                                <Text style={{ color: "cyan", fontSize: 13, fontWeight: 'bold', paddingLeft: 25 }}>Copy Link</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}