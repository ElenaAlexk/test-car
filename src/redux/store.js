import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { persistedContactsReducer } from './contactsSlice/contactsSlice';
import { filterReduser } from './filterSlice/filterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

//const persistContactsReducer = persistReducer(
//authPersistConfig,
//contactsReducer
//);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: persistedContactsReducer,
    filter: filterReduser,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
