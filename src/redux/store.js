import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

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
import logger from 'redux-logger';
import familyReducer from './family/family-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const familyPersistConfig = {
  key: 'family',
  storage,
  whitelist: ['userId']
};

export const store = configureStore({
  reducer: {
    family: persistReducer(familyPersistConfig, familyReducer),
  },
  middleware,
  devtools: process.env.NODE_ENV !== 'development',
});

export const persistor = persistStore(store);