import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import {BaseColor} from '@config';
import Icon from 'react-native-vector-icons/Feather';
import Main from './main';
//Screens
import Splash from '@screens/Splash'
import Login from '@screens/Login';
import Signup from '@screens/Signup'
import Stock from '@screens/Stock';
const RootStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Navigator(){
    const forFade = ({current, closing}) => ({
        cardStyle:{
            opacity:current.progress,
        },
    });

    useEffect(() =>{
        SplashScreen.hide();
    }, []);

    return(
        <NavigationContainer>
            <RootStack.Navigator
                mode="modal"
                headerMode="none"
                initialRouteName="Splash">
                    <RootStack.Screen name="Splash" component={Splash} options={{gestureEnabled:false}}/>
                    <RootStack.Screen name="Main" component={Main}/>
                    <RootStack.Screen name="Login" component={Login}/>
                    <RootStack.Screen name="Signup" component={Signup}/>
                    <RootStack.Screen name="Stock" component={Stock}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
