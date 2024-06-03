import React from 'react';
import { RenderTopicDetails } from 'components/topic/RenderTopicDetails';
import { AddPost } from 'components/post/AddPost';
import { Header } from 'components/header/Header';
import { Container } from '@mui/material';

export const TopicDetails = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <RenderTopicDetails />
        <AddPost />
      </Container>
    </div>
  );
};
