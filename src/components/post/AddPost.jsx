import React, { useState } from 'react';
import { Button } from '@mui/material';
import { FormPost } from './FormPost';
import { RenderPost } from './RenderPost';

export const AddPost = () => {
  const [showForm, setShowForm] = useState(false);

  const addPost = () => {
    setShowForm(true);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <Button
        variant="contained"
        onClick={addPost}
        sx={{ marginBottom: '30px' }}
      >
        Додати пост
      </Button>
      {showForm && <FormPost />}
      <RenderPost />
    </div>
  );
};
