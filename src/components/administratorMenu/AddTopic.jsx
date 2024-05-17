import { Header } from 'components/header/Header';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';

import { addTopic } from '../../redux/store/store';

export const AddTopic = () => {
  const [addNameTopic, setAddNameTopic] = useState('');
  const [descriptionTopic, setDescriptionTopic] = useState('');

  const allTopic = useSelector(state => state.topics.topicsArr);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const isTopicExists = allTopic.some(
      topic => topic.nameTopic === addNameTopic
    );
    if (isTopicExists) {
      Notiflix.Notify.failure('Topic already exists');
    } else {
      const newTopic = {
        id: nanoid(),
        nameTopic: addNameTopic,
        descriptionTopic,
        post: [],
      };

      dispatch(addTopic(newTopic));
      Notiflix.Notify.success('Topic was successfully added');

      setAddNameTopic('');
      setDescriptionTopic('');
    }
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'nameTopic':
        setAddNameTopic(value);
        break;

      case 'descriptionTopic':
        setDescriptionTopic(value);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          назва теми
          <input
            type="text"
            name="nameTopic"
            onChange={handleChange}
            value={addNameTopic}
          />
        </label>

        <label>
          опис теми
          <input
            type="text"
            name="descriptionTopic"
            onChange={handleChange}
            value={descriptionTopic}
          />
        </label>

        <button type="submit">опублікувати</button>
      </form>
    </div>
  );
};
