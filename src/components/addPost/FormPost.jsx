import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addPost } from '../../redux/store/store';
import { useParams } from 'react-router-dom';

export const FormPost = () => {
  const [post, setPost] = useState('');
  const dispatch = useDispatch();
  const { Id } = useParams();

  const handleSubmit = e => {
    e.preventDefault();

    const newPost = {
      id: nanoid(),
      content: post,
    };

    dispatch(addPost({ Id, post: newPost }));

    setPost('');
  };

  const handleChange = e => {
    const value = e.currentTarget.value;
    setPost(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="post" onChange={handleChange} value={post} />
      <button type="submit">Опублікувати</button>
    </form>
  );
};
