import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native'
import { Images, BaseColor } from '@config';


export default function Splash({ navigation }) {

  const onProcess = () => {
    setTimeout(() => {
      navigation.push('Login')
    }, 3000);
  };
  useEffect(() => {
    onProcess();
  }, []);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
      <Image source={Images.splash} style={{ height: '60%' }} />
      <Text>Welcome </Text>
    </View>
  )
}