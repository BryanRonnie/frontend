import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import languageReducer from './slices/languageSlice';
import appPreferencesReducer from './slices/appPreferencesSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['language']
};

const persistedLanguageReducer = persistReducer(persistConfig, languageReducer);
const appPreferencesLanguageReducer = persistReducer(persistConfig, appPreferencesReducer);

export const store = configureStore({
  reducer: {
    language: persistedLanguageReducer,
    appPreferences: appPreferencesLanguageReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;