import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  topicsArr: [],
};

export const addTopic = createAction('add');
export const getTopic = createAction('get');

export const topicReducer = createReducer(initialState, builder => {
  builder.addCase(addTopic, (state, action) => {
    state.topicsArr.push(action.payload);
  });
});

export const store = configureStore({
  reducer: {
    topics: topicReducer,
  },
});
