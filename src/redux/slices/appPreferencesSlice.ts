import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type AppPreferencesState = {
  currentLanguage: string;
  theme: 'light' | 'dark';
};

const initialState: AppPreferencesState = {
  currentLanguage: 'en',
  theme: 'dark'
};

export const appPreferencesSlice = createSlice({
  name: 'appPreferences',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }
  }
});

export const { setLanguage, setTheme, toggleTheme } = appPreferencesSlice.actions;
export default appPreferencesSlice.reducer;