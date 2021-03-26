import React, {useEffect} from 'react';
import {View, Text} from 'react-native'
export default function Splash({navigation}){

    const onProcess = () => {
        setTimeout(() => {
          navigation.push('Main')
        }, 3000);
      };
      useEffect(() => {
        onProcess();
      }, []);

    return(
        <View style={{flex:1}}>
            <Text>Splash screen</Text>
        </View>
    )
}