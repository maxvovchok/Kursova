import React, { useState } from 'react';
import { Button } from '@mui/material';
import { FormPost } from './FormPost';
import { RenderPost } from './RenderPost';

export const AddPost = () => {
  const [showForm, setShowForm] = useState(false);

  const addPost = () => {
    setShowForm(true);
  };

  const hideForm = () => {
    setShowForm(false);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      {!showForm && (
        <Button
          variant="contained"
          onClick={addPost}
          sx={{ marginBottom: '30px' }}
        >
          Add a post
        </Button>
      )}
      {showForm && <FormPost hideForm={hideForm} />}
      <RenderPost />
    </div>
  );
};
