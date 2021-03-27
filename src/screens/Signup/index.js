import React,{useState,useEffect} from 'react';
import {View,SafeAreaView,TextInput,Image,StatusBar,Text,Dimensions,KeyboardAvoidingView,Platform,ScrollView, TouchableOpacity,Alert} from 'react-native';
import {Images, BaseColor} from '@config';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export default function Signup({navigation}){
    
    const {width, height} = Dimensions.get('window');
    const offsetKeyboard = Platform.select({
        ios: 0,
        android: 20,
      });
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    function onAuthStateChanged(user) {
        setUser(user);
        if(user){
            navigation.navigate('Main')
        }
      }
      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
    const onRegister = () =>{
        auth()
            .createUserWithEmailAndPassword(email,password)
            .then((response) =>{
                console.error(response.user.uid)
                firestore()
                    .collection('users')
                    .doc(response.user.uid)
                    .set({
                        email,
                        username,
                        funds: "100000",
                        currentfunds: "100000",
                        positions: "0",
                        admin: false,
                        watchlist: [],
                    })
                    .then(() =>{
                        console.error("added")
                    })
            })

    }
    return(
            <KeyboardAvoidingView  behavior={Platform.OS === 'android' ? 'height' : 'padding'} keyboardVerticalOffset={offsetKeyboard} style={{flex:1, backgroundColor:BaseColor.backgroundColor}}>
                <StatusBar backgroundColor={BaseColor.backgroundColor}/>
                <SafeAreaView style={{flex:1,backgroundColor:BaseColor.backgroundColor}}>
                    <View style={{padding:20, flex:1, justifyContent:'flex-end'}}>
                <Image source={Images.login} style={{height:160, width:125, alignSelf: 'center', marginTop:40}}/>
            <View>
                <Text style={{fontSize:40, color:BaseColor.whiteColor, alignSelf: 'center',marginTop:20, fontWeight:'bold'}}>StalkStock</Text>
                <Text style={{fontSize:18, color:BaseColor.greyColor,alignSelf:'center'}}>The future of trading</Text>
            </View>
            <View style={{alignSelf:'center',marginTop:20}}>
                <Text style={{fontSize:24, color:BaseColor.whiteColor,alignSelf:'center'}}>Create a free acount!</Text>
                <TextInput
                    style={{borderColor:BaseColor.greyColor, borderWidth:1, width:0.85*width,borderRadius:10,marginTop:5, color:BaseColor.whiteColor}}
                    placeholder='Username'
                    placeholderTextColor={BaseColor.greyColor}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={{borderColor:BaseColor.greyColor, borderWidth:1, width:0.85*width,borderRadius:10,marginTop:15, color:BaseColor.whiteColor}}
                    placeholder='Email'
                    placeholderTextColor={BaseColor.greyColor}
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={{borderColor:BaseColor.greyColor, borderWidth:1, width:0.85*width,borderRadius:10,marginTop:15, color:BaseColor.whiteColor}}
                    placeholder='Password'
                    secureTextEntry
                    placeholderTextColor={BaseColor.greyColor}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity activeOpacity={0.9} style={{width:0.5*width, alignSelf:'center', backgroundColor:BaseColor.greenColor, marginTop:20, alignItems:'center', height:50, justifyContent: 'center', borderRadius:10, marginBottom:20}}
                    onPress = {() => onRegister()}
                >
                    <Text style={{fontSize:16, color:BaseColor.whiteColor, fontWeight:'bold'}}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'center',padding:10}}>
                <Text style={{fontSize:16, color:BaseColor.whiteColor}}>Already have an account?</Text>
                <TouchableOpacity activeOpacity={0.3} onPress={() => navigation.navigate('Login')}>
                <Text style={{fontSize:16, color:BaseColor.whiteColor, fontWeight:'bold'}}>  Login!</Text>
                </TouchableOpacity>
            </View>
            </View>
            </SafeAreaView>
            </KeyboardAvoidingView>
    );
}