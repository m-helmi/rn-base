import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LIGHT_COLORS, DARK_COLORS, LIGHT_FONTS, DARK_FONTS} from '@src/themes';
import {useAppSelector} from '@src/store';
import {ThemeMode} from '@src/utils';

interface ThemeState {
  colors: typeof LIGHT_COLORS | typeof DARK_COLORS;
  fonts: typeof LIGHT_FONTS | typeof DARK_FONTS;
  isDarkMode: ThemeMode;
  systemMode?: 'dark' | 'light';
}

const initialState: ThemeState = {
  colors: LIGHT_COLORS,
  fonts: LIGHT_FONTS,
  isDarkMode: ThemeMode.LIGHT_MODE,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    onModeChange(state, {payload}: PayloadAction<ThemeMode>) {
      if (payload == ThemeMode.DARK_MODE) {
        state.colors = LIGHT_COLORS;
        state.fonts = DARK_FONTS;
        state.isDarkMode = payload;
      } else {
        state.colors = LIGHT_COLORS;
        state.fonts = DARK_FONTS;
        state.isDarkMode = payload;
      }
    },
    onSystemModeChange(state, {payload}: PayloadAction<'dark' | 'light'>) {
      if (payload == 'dark') {
        state.colors = LIGHT_COLORS;
        state.fonts = DARK_FONTS;
        state.systemMode = payload;
      } else {
        state.colors = LIGHT_COLORS;
        state.fonts = DARK_FONTS;
        state.systemMode = payload;
      }
    },
  },
});

export const {onModeChange, onSystemModeChange} = themeSlice.actions;

export default themeSlice.reducer;
export const useTheme = () => useAppSelector(state => state.theme);
