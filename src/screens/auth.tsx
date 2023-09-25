import {AppButton, AppText} from '@src/common';
import {AppNavigation} from '@src/navigation';
import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';

export const Auth = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red', alignSelf: 'stretch'}}>
      <TouchableOpacity
        onPress={() => AppNavigation.push('test')}
        style={{
          marginTop: 100,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'stretch',
          backgroundColor: 'green',
        }}>
        <AppText>Push</AppText>
      </TouchableOpacity>
    </View>
  );
};
