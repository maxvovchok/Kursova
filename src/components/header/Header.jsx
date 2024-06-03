import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container,
} from '@mui/material';

export const Header = () => {
  const location = useLocation();
  const isForum = location.pathname === '/' || location.pathname === '/login';
  const isAdmin = location.pathname === '/administrator';
  const isHome =
    location.pathname === '/administrator/addtopic' ||
    location.pathname.includes('/topic');
  const isLogin =
    location.pathname === '/' ||
    location.pathname === '/login' ||
    location.pathname.includes('/guest');

  return (
    <Box sx={{ width: '100%', marginBottom: 4 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" component="div">
                Forum
              </Typography>
            </Box>
            <Box sx={{ width: '20px' }} />{' '}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {isForum && (
                <Button component={NavLink} to="/guest" color="inherit">
                  Continue as Guest
                </Button>
              )}
              {isHome && (
                <Button
                  component={NavLink}
                  to={
                    location.pathname.includes('/guest')
                      ? '/guest'
                      : location.pathname.includes('/user')
                      ? '/user'
                      : '/administrator'
                  }
                  color="inherit"
                >
                  Home
                </Button>
              )}

              {isAdmin && (
                <Button
                  component={NavLink}
                  to="/administrator/addtopic"
                  color="inherit"
                >
                  Add topic
                </Button>
              )}
            </Box>
            <Box sx={{ flexGrow: 1 }} />{' '}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {isLogin ? (
                <Button component={NavLink} to="/login" color="inherit">
                  Log in
                </Button>
              ) : (
                <Button
                  component={NavLink}
                  to="/"
                  color="error"
                  variant="contained"
                >
                  Log out
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
