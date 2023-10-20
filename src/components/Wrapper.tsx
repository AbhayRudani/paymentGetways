import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {network} from '../helper/hooks/network';

const Wrapper = ({children, connected}) => {
  const content = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/icons/internet.png')}
          style={{height: 120, width: 120, marginTop: -80}}
        />
        <Text style={{fontSize: 22, fontWeight: '700', marginTop: 30}}>
          No Internet Connected
        </Text>
      </View>
    );
  };
  return <View style={styles.wrapper}>{connected ? children : content()}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default Wrapper;
