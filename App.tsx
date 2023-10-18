/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { atom, createStore, Provider } from 'jotai';
import MainNavigation from './src/navigation/MainNavigation';

function App(): JSX.Element {

  const myStore = createStore();
 useEffect(()=>{SplashScreen?.hide()},[1000])

  const countAtom = atom(158)
  myStore.set(countAtom, 20)
  const unsub = myStore.sub(countAtom, () => {
    console.log('countAtom value is changed to', myStore.get(countAtom))
  })
  console.log('unsub',myStore.get(countAtom))
  return (
    <Provider  store={myStore}>
    <MainNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
