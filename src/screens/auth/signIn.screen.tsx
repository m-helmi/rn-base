import {AppButton} from '@src/common';
import {AppNavigation} from '@src/navigation';
import React from 'react';
import {View} from 'react-native';
export const SignIn = ({}) => {
  return (
    <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: 'red'}}>
      <AppButton
        style={{height: 100, alignSelf: 'stretch', backgroundColor: 'green'}}
        onPress={() => AppNavigation.pop()}
      />
    </View>
  );
};
