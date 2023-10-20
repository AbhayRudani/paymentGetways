//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import {useNavigation} from '@react-navigation/native';
import {network} from '../helper/hooks/network';

// create a component
const DemoScreen4 = () => {
  const navigation = useNavigation();
  const {connected} = network();
  console.log('connected called 1212121', connected);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView />
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Text style={{fontSize: 30}}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 24, fontWeight: '700'}}>DemoScreen 4</Text>
        <TouchableOpacity>
          <Text style={{fontSize: 30}}>{'$'}</Text>
        </TouchableOpacity>
      </View>
      <Wrapper connected={connected}>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4adscfdszfvdsfvds</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
        <Text> demoScreen4</Text>
      </Wrapper>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default DemoScreen4;
