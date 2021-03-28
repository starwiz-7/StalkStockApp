import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import { BaseColor } from '@config';
import Icon from 'react-native-vector-icons/Feather';
//Screens


import Home from '@screens/Home';
import Bookmark from '@screens/Bookmark';
import Portfolio from '@screens/Portfolio';
import Search from '@screens/Search';
import Stock from '@screens/Stock'
const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Main() {
    return (
        <MainStack.Navigator
            headerMode='none'
            initialRouteName="BottomTabNavigator">
            <MainStack.Screen name="BottomTabNavigator"
                component={BottomTabNavigator} />
            <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>

    );
}


function BottomTabNavigator() {
    let index = 1;

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            headerMode="none"
            tabBarOptions={{
                showIcon: true,
                showLabel: false,
                activeTintColor: BaseColor.whiteColor,
                inactiveTintColor: BaseColor.greyColor,
                style: { backgroundColor: BaseColor.darkGreenColor, elevation: 3, height: 55 }
            }}>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (<Icon name='home' size={25} color={color} />)
                }} />
            <BottomTab.Screen
                name="Portfolio"
                component={Portfolio}
                options={{
                    tabBarIcon: ({ color }) => (<Icon name='pie-chart' size={25} color={color} />)
                }} />
            <BottomTab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => (<Icon name='search' size={25} color={color} />)
                }} />
            <BottomTab.Screen
                name="Watchlist"
                component={Bookmark}
                options={{
                    tabBarIcon: ({ color }) => (<Icon name='star' size={25} color={color} />)
                }} />
            <BottomTab.Screen
                name="Profile"
                component={Stock}
                options={{
                    tabBarIcon: ({ color }) => (<Icon name='user' size={25} color={color} />)
                }} />
        </BottomTab.Navigator>
    );
}