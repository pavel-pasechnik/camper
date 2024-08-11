import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import advertsReducer from './adverts/slice.js';
import favoritesReducer from './favorites/slice.js';
import filtersReducer from './filters/slice.js';

// const authPersistConfig = {
//   key: 'authSlice',
//   storage,
//   whitelist: ['token'],
// };

// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    // auth: persistedAuthReducer,
    adverts: advertsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
