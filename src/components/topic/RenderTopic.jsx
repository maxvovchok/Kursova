import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { deleteTopic } from '../../redux/store/store';
import {
  Typography,
  Button,
  ListItem,
  ListItemText,
  List,
  Box,
  Divider,
} from '@mui/material';

export const RenderTopic = () => {
  const filteredTopics = useSelector(state => state.topics.filteredTopics);
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/administrator');
  const isUserPage = location.pathname.startsWith('/user');
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTopic(id));
  };

  return (
    <Box mr={2} mt={-4}>
      <Typography variant="h5" gutterBottom>
        Всі теми
      </Typography>
      {filteredTopics.length > 0 ? (
        <List>
          {filteredTopics.map(
            ({ id, nameTopic, descriptionTopic, category }) => (
              <Box
                key={id}
                sx={{
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  marginBottom: '10px',
                  padding: '10px',
                }}
              >
                <ListItem disablePadding>
                  <ListItemText sx={{ '& > *': { marginBottom: '8px' } }}>
                    <Link
                      to={
                        isAdminPage
                          ? `/administrator/topic/${id}`
                          : isUserPage
                          ? `/user/topic/${id}`
                          : `/guest/topic/${id}`
                      }
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {nameTopic}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ marginTop: '8px', marginBottom: '4px' }}
                      >
                        {descriptionTopic}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: '#666' }}>
                        Категорія: {category}
                      </Typography>
                    </Link>
                  </ListItemText>
                  {isAdminPage && (
                    <Button
                      onClick={() => handleDelete(id)}
                      variant="outlined"
                      color="error"
                      sx={{ height: '100%' }}
                    >
                      Видалити
                    </Button>
                  )}
                </ListItem>
                <Divider />
              </Box>
            )
          )}
        </List>
      ) : (
        <Typography variant="h6">Тем не має</Typography>
      )}
    </Box>
  );
};
