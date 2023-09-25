import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useAppSelector} from '@src/store';
import {Direction, Lang} from '@src/utils';

interface LangState {
  lang: Lang;
  direction: Direction;
}

const initialState: LangState = {
  lang: Lang.ar,
  direction: Direction.ltr,
};

const langSlice = createSlice({
  name: 'langSlice',
  initialState,
  reducers: {
    changeLanguage(state, {payload}: PayloadAction<Lang>) {
      state.lang = payload;
      return state;
    },
    changeDirection(state, {payload}: PayloadAction<Direction>) {
      state.direction = payload;
    },
  },
});

export const useCurrentLangSelector = () =>
  useAppSelector(state => state.lang.lang);

export const useIsLtr = () => useAppSelector(state => state.lang.direction);

export default langSlice.reducer;
export const {changeLanguage} = langSlice.actions;
export const {changeDirection} = langSlice.actions;
