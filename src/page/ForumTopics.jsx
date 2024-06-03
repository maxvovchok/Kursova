import React from 'react';
import { Header } from 'components/header/Header';
import { SearchCategory } from 'components/searchСategory/SearchCategory';
import { RenderTopic } from '../components/topic/RenderTopic';
import { Container, Box, Typography } from '@mui/material';

export const ForumTopics = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Header />
      <Container maxWidth="md" sx={{ width: '600px', minHeight: '400px' }}>
        <Box mt={4} mb={4}>
          <Typography variant="h6" align="center" gutterBottom>
            Topics
          </Typography>
          <SearchCategory />
        </Box>
        <RenderTopic />
      </Container>
    </Box>
  );
};
