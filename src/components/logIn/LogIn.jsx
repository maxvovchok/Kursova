import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import user from '../../redux/user.json';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const isAdmin =
      user.administrator.email === email &&
      user.administrator.password === password;
    const isUser = user.user.email === email && user.user.password === password;

    if (isAdmin) {
      window.location.href = 'administrator';
    } else if (isUser) {
      window.location.href = 'user';
    } else {
      setMessage('Invalid email or password');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Log In
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleLogin} fullWidth>
        LOG IN
      </Button>
      <Typography color="error" variant="body1" gutterBottom>
        {message}
      </Typography>
    </Box>
  );
};
