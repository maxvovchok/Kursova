import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const initialState = {
  topicsArr: [],
};

export const getTopic = createAction('get');
export const addTopic = createAction('add');
export const addPost = createAction('addPost');

export const topicReducer = createReducer(initialState, builder => {
  builder.addCase(addTopic, (state, action) => {
    state.topicsArr.push(action.payload);
  });
  builder.addCase(addPost, (state, action) => {
    const { Id, post } = action.payload;
    const topic = state.topicsArr.find(t => t.id === Id);
    if (topic) {
      topic.post.push(post);
    }
  });
});

const persistedReducer = persistReducer(persistConfig, topicReducer);

export const store = configureStore({
  reducer: {
    topics: persistedReducer,
  },
});

export const persistor = persistStore(store);
