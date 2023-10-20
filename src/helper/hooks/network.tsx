import NetInfo from '@react-native-community/netinfo';
import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';

export const network = () => {
  const focus = useIsFocused();
  const [connected, setConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('state?.isConnected ', state?.isConnected);
      setConnected(state?.isConnected || false);
    });
    // console.log('unsubscribe 11111', unsubscribe);
    // Unsubscribe
    unsubscribe();
  }, [focus]);
  return {connected};
};
