import React from 'react';
import { Header } from 'components/header/Header';
import { Container, Typography, Box } from '@mui/material';

export const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Header />
      <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to the forum!
        </Typography>
        <Typography variant="body1">
          You must be logged in or continue as a guest to continue.
        </Typography>
      </Container>
    </Box>
  );
};
