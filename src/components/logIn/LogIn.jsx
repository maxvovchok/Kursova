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
      setMessage('Неправильний email або пароль');
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
        Увійти
      </Typography>
      <TextField
        label="Електронна пошта"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Пароль"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleLogin} fullWidth>
        УВІЙТИ
      </Button>
      <Typography color="error" variant="body1" gutterBottom>
        {message}
      </Typography>
    </Box>
  );
};
