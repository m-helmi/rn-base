import {useInternet, useTheme} from '@src/slices';
import React, {FC, ReactElement} from 'react';
import {
  View,
  ScrollView,
  ScrollViewProps,
  SafeAreaView,
  ViewProps,
  StatusBar,
} from 'react-native';
import {AppHeader, AppSpinner} from '@src/common';
import {styles} from './styles';
interface HeaderProps {
  title?: string;
  hideBack?: boolean;
  rightItem?: ReactElement;
  leftItem?: ReactElement;
  onBackPress?: () => void;
  withBorder?: boolean;
  customTitle?: ReactElement;
  noElevation?: boolean;
  isLoading?: boolean;
}
interface Props extends ScrollViewProps, ViewProps {
  checkInternetConnection?: boolean;
  headerProps?: HeaderProps;
  noHeader?: boolean;
  enableScrollView?: boolean;
  refetch?: () => void;
  remove?: () => void;
  authContainer?: boolean;
  isLoading?: boolean;
}
export const AppScreenContainer: FC<Props> = props => {
  const {
    children,
    style,
    headerProps,
    noHeader,
    checkInternetConnection,

    enableScrollView,
    authContainer,
    isLoading,
    ...rest
  } = props;
  const {isInternetAvailable} = useInternet();
  const {
    colors: {background},
  } = useTheme();
  if (!isInternetAvailable && checkInternetConnection) {
    return <View />;
  }

  const content = (
    <>
      {enableScrollView ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.container, style]}
          {...rest}>
          {children}
        </ScrollView>
      ) : (
        <View
          style={[
            authContainer ? styles.authContainer : styles.container,
            style,
            {backgroundColor: background},
          ]}
          {...rest}>
          {children}
        </View>
      )}
    </>
  );
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor: background}} />
      {!noHeader && <AppHeader {...headerProps} />}
      {isLoading ? (
        <View style={styles.spinner}>
          <AppSpinner />
        </View>
      ) : (
        content
      )}
      <SafeAreaView />
    </>
  );
};
