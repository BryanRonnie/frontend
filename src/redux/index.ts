import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appPreferencesReducer from './slices/appPreferences';
import userAccountsReducer from './slices/userAccounts';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['language']
};

const appPreferencesLanguageReducer = persistReducer(persistConfig, appPreferencesReducer);
const userAccountsPersistedReducer = persistReducer(persistConfig, userAccountsReducer);

export const store = configureStore({
  reducer: {
    appPreferences: appPreferencesLanguageReducer,
    userAccounts: userAccountsPersistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;