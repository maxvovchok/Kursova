import { createReducer } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import { initialState } from 'redux/store/store';

export const addTopic = createAction('add');
export const getTopic = createAction('get');

export const topicReducer = createReducer(initialState, builder => {
  builder.addCase(addTopic, (state, action) => {
    state.topic.push(action.payload);
  });
});
