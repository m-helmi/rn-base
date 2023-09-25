import {store} from '@src/store';
import {ThemeMode} from '@src/utils';
import {
  Navigation,
  Options,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
export const defaultNavOptions: Options = {
  navigationBar: {
    backgroundColor: 'white',
  },
  statusBar: {
    visible: true,
    style: 'light',
    backgroundColor: 'white',
  },
  topBar: {
    // drawBehind: true,
    visible: false,
    animate: false,
  },
  // topBar: {
  //   title: {
  //     color: 'white'
  //   },
  //   backButton: {
  //     color: 'white'
  //   },
  //   background: {
  //     color: '#4d089a'
  //   }
  // },

  animations: {
    setRoot: {
      waitForRender: true,
    },
    push: {
      waitForRender: true,
      enabled: true,

      content: {
        translationX: {
          from: require('react-native').Dimensions.get('window').width,
          to: 0,
          duration: 100,
        },
      },
    },
    pop: {
      waitForRender: false,
      enabled: true,

      content: {
        translationX: {
          from: 0,
          to: require('react-native').Dimensions.get('window').width,
          duration: 100,
        },
      },
    },
    showModal: {
      waitForRender: false,
      enabled: true,
      translationY: {
        from: require('react-native').Dimensions.get('window').height,
        to: 0,
        duration: 400,
        interpolation: {type: 'accelerateDecelerate'},
      },
    },
    dismissModal: {
      waitForRender: false,
      enabled: true,
      translationY: {
        to: require('react-native').Dimensions.get('window').height,
        from: 0,
        duration: 150,
        interpolation: {type: 'accelerateDecelerate'},
      },
    },
  },
  modalPresentationStyle: OptionsModalPresentationStyle.currentContext,
  bottomTabs: {
    drawBehind: true,
    visible: false,
    animate: false,

    // tabsAttachMode: 'onSwitchToTab',
  },
};
export const setNavigationDefaultOptions = (options: Options = {}) => {
  Navigation.setDefaultOptions({
    ...defaultNavOptions,
    ...options,
    ...PushVerticalScreenOptions,
    layout: {
      direction: store.getState().lang.direction,
      backgroundColor: store.getState().theme.colors.background,
      orientation: ['portrait'],
    },
  });
};
export const PushVerticalScreenOptions: Options = {
  animations: {
    showModal: {
      waitForRender: false,
      enabled: true,
      translationY: {
        from: require('react-native').Dimensions.get('window').height,
        to: 0,
        duration: 400,
        interpolation: {type: 'accelerateDecelerate'},
      },
    },
  },
};
