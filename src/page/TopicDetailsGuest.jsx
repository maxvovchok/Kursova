import React from 'react';
import { RenderPost } from 'components/post/RenderPost';
import { RenderTopicDetails } from 'components/topic/RenderTopicDetails';
import { Header } from 'components/header/Header';
import { Container, Box } from '@mui/material';

export const TopicDetailsGuest = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container maxWidth="lg" sx={{ flex: 1, mt: 4 }}>
        <RenderTopicDetails />
        <RenderPost />
      </Container>
    </Box>
  );
};
