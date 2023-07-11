//* Redux
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

//* Redux-Persist
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

//* Slices
import theme from './slices/themeSlice';
import member from './slices/memberSlice';

//* Types
import { WebStorage } from 'redux-persist/lib/types';

export function createPersistStorage(): WebStorage {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }

  return createWebStorage('local');
}

const persistConfig = {
  key: 'root',
  storage: createPersistStorage(),
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  theme,
  member,
});

export default persistReducer(persistConfig, rootReducer);
