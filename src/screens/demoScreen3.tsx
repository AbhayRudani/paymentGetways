import {StripeProvider, useStripe} from '@stripe/stripe-react-native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const demoScreen3 = () => {
  const [amountValue, setAmountValue] = useState('');
  const stripe = useStripe();
  const buy = async () => {
    const response = await fetch('http://localhost:8080/pay', {
      method: 'POST',
      body: JSON.stringify({
        amount: amountValue,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('data :::', data);
    if (!response.ok) {
      return Alert.alert(data.message);
    }
    const clientSecret: any = data.clientSecret;
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
    });
    if (initSheet.error) {
      return Alert.alert(initSheet.error.message);
    }
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret,
    });
    if (presentSheet.error) {
      return Alert.alert(presentSheet.error.message);
    }
  };
  return (
    <StripeProvider publishableKey="pk_test_51O29xHSFe6RC84AM2Thkncq6UrVVafq7wpC6We8bX2H29YQpmhbnsXLZq4Xc7XwzD8MeaBU4qN1shpBnPzcRjR1r00Ea9Cz6UU">
      <SafeAreaView style={{flex: 1}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            alignSelf: 'center',
            marginBottom: 40,
          }}>
          Stripe payment
        </Text>
        <TextInput
          value={amountValue}
          onChangeText={text => setAmountValue(text)}
          placeholder="Enter Payment......"
          style={{
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
            borderWidth: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            buy();
          }}
          style={{
            justifyContent: 'center',
            backgroundColor: 'green',
            alignSelf: 'center',
            padding: 10,
            marginTop: 20,
          }}>
          <Text>Buy</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default demoScreen3;
