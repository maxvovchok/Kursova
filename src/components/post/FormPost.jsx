import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addPost } from '../../redux/slice/TopicSlice';
import { useParams } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';

export const FormPost = () => {
  const [post, setPost] = useState('');
  const [showForm, setShowForm] = useState(true);
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
    setShowForm(false);
  };

  const handleChange = e => {
    const value = e.currentTarget.value;
    setPost(value);
  };

  return (
    <div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <TextField
              type="text"
              name="post"
              label="Введіть ваш пост"
              variant="outlined"
              onChange={handleChange}
              value={post}
              fullWidth
              sx={{ mr: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
              Опублікувати
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};
