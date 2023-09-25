import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer} from 'redux-persist';
import {
  LangReducer,
  AuthReducer,
  InternetReducer,
  ThemeReducer,

} from '@src/slices';

const reducers = combineReducers({
  lang: LangReducer,
  internet: InternetReducer,
  auth: AuthReducer,
  theme: ThemeReducer,
 
});

export type RootState = ReturnType<typeof reducers>;

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'lang', 'country', 'theme'],
};

export const rootReducer = persistReducer(persistConfig, reducers);

export type RootStore = ReturnType<typeof reducers>;
