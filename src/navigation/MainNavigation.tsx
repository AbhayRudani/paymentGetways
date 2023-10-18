import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import demoScreen1 from '../screens/demoScreen1';
import demoScreen2 from '../screens/demoScreen2';
import demoScreen3 from '../screens/demoScreen3';

const MainNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='demoScreen3'>
       <Stack.Screen name="demoScreen1" component={demoScreen1} />
       <Stack.Screen name="demoScreen2" component={demoScreen2} />
       <Stack.Screen name="demoScreen3" component={demoScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MainNavigation;
