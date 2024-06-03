import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { topicReducer } from '../slice/TopicSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, topicReducer);

export const store = configureStore({
  reducer: {
    topics: persistedReducer,
  },
});

export const persistor = persistStore(store);
