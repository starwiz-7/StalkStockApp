import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native'
import { Images, BaseColor } from '@config';
import styles from './style';

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
    <View style={styles.background}>
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <Image source={Images.splash_logo} style={{ width: 150, height: 75, margin: 20 }} />
        <Image source={Images.splash} style={{ width: '100%', marginTop: 5 }} />
        <Text style={{ color: 'white', fontFamily: 'Cochin', fontWeight: 'bold', fontSize: 40, borderColor: "white", textAlign: 'center', margin: 20, textShadowColor: 'black', textShadowRadius: 5 }}>A fun entry into the Stock Market! </Text>
      </View>
    </View>
  )
}