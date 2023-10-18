import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const demoScreen2 = () => {
  const [translation, setTranslation] = useState(0);
  const [translation2, setTranslation2] = useState(0);
  console.log('translation', translation);
  // useEffect(() => {
  //   setTranslation(50);
  // }, []);

  // useEffect(() => {
  //   for (let i = 0; i < 812; i++) {
  //     setTimeout(() => {
  //       setTranslation(i);
  //       setTranslation2(i);
  //     }, 25 * i);
  //   }
  // }, []);
  const payment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_fluUuJdSwXHxa9',
      amount: 10,
      name: 'foo',
      prefill: {
        email: 'abc@gamil.com',
        contact: '9999999999',
        name: 'Razorpay Software',
        // method: 'card',
      },
      theme: {color: '#2F87EC'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        console.log('data',data)
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          height: 40,
          width: 100,
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
        }} onPress={payment}>
        <Text style={{fontWeight: '600'}}>Pay</Text>
      </TouchableOpacity>
    </View>
    //   <View
    //   style={{
    //     width: 100,
    //     height: 100,
    //     backgroundColor: 'orange',
    //     transform: [{translateY: translation }],
    //   }}
    // />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default demoScreen2;
