import {persistor, store} from '@src/store';
import {queryClient} from '@src/utils';
import React from 'react';
import {
  gestureHandlerRootHOC,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {CustomNavigationFunctionComponent, Screen} from './types.navigation';
export const createScreen = (screen: Screen) => {
  const {name, component: Component, contextProvider: ContextProvider} = screen;

  let ScreenWrapper: CustomNavigationFunctionComponent<any>;
  if (ContextProvider) {
    ScreenWrapper = props => (
      <ContextProvider>
        <Component {...props} />
      </ContextProvider>
    );
  } else {
    ScreenWrapper = props => (
      <>
        <Component {...props} />
      </>
    );
  }

  Navigation.registerComponent(name, () =>
    gestureHandlerRootHOC(props => {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <ScreenWrapper {...props} />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      );
    }),
  );
};
