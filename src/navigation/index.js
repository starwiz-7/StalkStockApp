import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from 'react-native-splash-screen';
import Splash from '@screens/Splash'
const RootStack = createStackNavigator();

export default function Navigator(){
    // const forFade = ({current, closing}) => ({
    //     cardStyle:{
    //         opacity:current.progress,
    //     },
    // });

    // useEffect(() =>{
    //     SplashScreen.hide();
    // }, []);

    return(
        <NavigationContainer>
            <RootStack.Navigator
                mode="modal"
                headerMode="none"
                initialRouteName="Splash">
                    <RootStack.Screen name="Splash" component={Splash} options={{gestureEnabled:false}}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}