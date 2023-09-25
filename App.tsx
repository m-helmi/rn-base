/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Auth} from '@src/screens';
import {Alert} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  Alert.alert('');

  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
        alignSelf: 'stretch',
      }}>
      <Text>dsadas</Text>
      <Auth />
    </View>
  );
}

export default App;
