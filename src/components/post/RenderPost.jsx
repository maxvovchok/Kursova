import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';

export const RenderPost = () => {
  const { Id } = useParams();
  const allTopic = useSelector(state => state.topics.topicsArr);
  const topic = allTopic.find(t => t.id === Id);

  return (
    <Box mt={4}>
      {topic && topic.post.length > 0 ? (
        <>
          <Typography variant="h5" gutterBottom>
            All posts
          </Typography>
          <List>
            {topic.post.map(({ content }, index) => (
              <ListItem
                key={index}
                sx={{
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  marginBottom: '10px',
                  padding: '10px',
                  backgroundColor: '#f9f9f9',
                }}
              >
                <ListItemText primary={content} />
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <Typography variant="h6">There are no posts</Typography>
      )}
    </Box>
  );
};
