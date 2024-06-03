import React from 'react';
import { Header } from 'components/header/Header';
import { LogIn } from 'components/logIn/LogIn';
import { Container, Box } from '@mui/material';

export const LogInPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Header />
      <Container
        maxWidth="md"
        sx={{ marginTop: '-180px', width: '400px', height: '400px' }}
      >
        <LogIn />
      </Container>
    </Box>
  );
};
