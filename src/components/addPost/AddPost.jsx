import { useState } from 'react';
import { FormPost } from './FormPost';
import { RenderPost } from './RenderPost';

export const AddPost = () => {
  const [showForm, setShowForm] = useState(false);

  function addPost() {
    setShowForm(true);
  }

  return (
    <div>
      <button onClick={addPost}>Додати пост</button>
      {showForm && <FormPost />}
      {<RenderPost />}
    </div>
  );
};
