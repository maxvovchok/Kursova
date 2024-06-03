import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  topicsArr: [],
  filteredTopics: [],
};

export const getTopic = createAction('get');
export const addTopic = createAction('add');
export const updateTopic = createAction('update');
export const addPost = createAction('addPost');
export const filterTopics = createAction('filter');
export const deleteTopic = createAction('deleteTopic');
export const deletePost = createAction('deletePost');

export const topicReducer = createReducer(initialState, builder => {
  builder.addCase(addTopic, (state, action) => {
    state.topicsArr.push(action.payload);
    state.filteredTopics = state.topicsArr;
  });
  builder.addCase(updateTopic, (state, action) => {
    const index = state.topicsArr.findIndex(
      topic => topic.id === action.payload.id
    );
    if (index !== -1) {
      state.topicsArr[index] = {
        ...state.topicsArr[index],
        ...action.payload,
        post: state.topicsArr[index].post,
      };
    }
    state.filteredTopics = state.topicsArr;
  });
  builder.addCase(addPost, (state, action) => {
    const { Id, post } = action.payload;
    const topic = state.topicsArr.find(t => t.id === Id);
    if (topic) {
      topic.post.push(post);
    }
  });
  builder.addCase(filterTopics, (state, action) => {
    const { category, searchTerm } = action.payload;
    state.filteredTopics = state.topicsArr.filter(topic => {
      const matchesCategory = category ? topic.category === category : true;
      const matchesSearchTerm = topic.nameTopic
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearchTerm;
    });
  });
  builder.addCase(deleteTopic, (state, action) => {
    state.topicsArr = state.topicsArr.filter(
      topic => topic.id !== action.payload
    );
    state.filteredTopics = state.topicsArr;
  });
});
