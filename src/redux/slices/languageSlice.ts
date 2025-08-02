import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type LanguageState = {
  currentLanguage: string;
};

const initialState: LanguageState = {
  currentLanguage: 'en'
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload;
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;