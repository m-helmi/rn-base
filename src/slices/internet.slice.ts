import NetInfo from '@react-native-community/netinfo';
import {createSlice} from '@reduxjs/toolkit';
import axios, {Canceler} from 'axios';
import {AppThunk, AppDispatch, useAppSelector} from '@src/store';

interface InternetState {
  isInternetAvailable: boolean;
}

const initialState: InternetState = {
  isInternetAvailable: true,
};

const internetSlice = createSlice({
  name: 'internet',
  initialState,
  reducers: {
    internetAvailable(state) {
      state.isInternetAvailable = true;
    },
    internetNotAvailable(state) {
      state.isInternetAvailable = false;
    },
  },
});

export const {internetAvailable, internetNotAvailable} = internetSlice.actions;

export const listenToInternetStatus =
  (): AppThunk => async (dispatch: AppDispatch) => {
    const CancelToken = axios.CancelToken;
    let timeOut = 20000;
    let timePingOut = 15000;
    let cancel: Canceler;
    let timeOutListener: NodeJS.Timeout;
    // poll check internet
    const _checkInternet = async () => {
      try {
        await axios.get('https://www.google.com', {
          cancelToken: new CancelToken(function executor(c) {
            cancel = c;
          }),
          timeout: timePingOut,
        });
        timeOut = 20000;
        dispatch(internetAvailable());
      } catch (err) {
        if (!axios.isCancel(err)) {
          timeOut = 1000;
          dispatch(internetNotAvailable());
        }
      }
    };
    const _poll = async () => {
      if (cancel) cancel();
      if (timeOut) clearTimeout(timeOutListener);
      await _checkInternet();
      timeOutListener = setTimeout(_poll, timeOut);
    };
    // once
    await NetInfo.fetch();

    NetInfo.addEventListener(netInfostate => {
      if (netInfostate.isConnected) {
        timeOut = 20000;
        _poll();
      } else {
        dispatch(internetNotAvailable());
      }
    });
  };

export const useInternet = () => useAppSelector(state => state.internet);
export default internetSlice.reducer;
