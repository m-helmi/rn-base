import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@src/store';
import {useSelector} from 'react-redux';

interface AuthState {
  user: any;
}

const initialState: AuthState = {
  user: null as unknown as any,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    loginSuccess(state, {payload}: PayloadAction<any>) {
      state.user = payload;
      return state;
    },
    logOut(state) {
      state.user = null as unknown as any;
      return state;
    },
    updateUser(state, {payload}: PayloadAction<any>) {
      if (payload) {
        state.user = payload;
      }
    },
  },
});

export const usePrincipleSelector = () =>
  useSelector((state: RootState) => state.auth.user);
export const useCurrentUserSelector = () =>
  useSelector((state: RootState) => state?.auth?.user);

// export const tokenSelector = (state: RootState) => state.auth.a;

export default authSlice.reducer;
export const {loginSuccess, logOut, updateUser} = authSlice.actions;
