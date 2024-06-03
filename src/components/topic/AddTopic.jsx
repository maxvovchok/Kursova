import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import {
  Typography,
  TextField,
  Button,
  Container,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';

import { addTopic } from '../../redux/store/store';

export const AddTopic = () => {
  const [addNameTopic, setAddNameTopic] = useState('');
  const [descriptionTopic, setDescriptionTopic] = useState('');
  const [category, setCategory] = useState('');

  const allTopic = useSelector(state => state.topics.topicsArr);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const isTopicExists = allTopic.some(
      topic => topic.nameTopic === addNameTopic
    );

    if (isTopicExists) {
      Notiflix.Notify.failure('Topic already exists');
    } else {
      const newTopic = {
        id: nanoid(),
        nameTopic: addNameTopic,
        descriptionTopic,
        category,
        post: [],
      };

      dispatch(addTopic(newTopic));
      Notiflix.Notify.success('Topic was successfully added');

      setAddNameTopic('');
      setDescriptionTopic('');
      setCategory('');

      navigate('/administrator');
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'nameTopic':
        setAddNameTopic(value);
        break;

      case 'descriptionTopic':
        setDescriptionTopic(value);
        break;

      case 'category':
        setCategory(value);
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Add a new topic
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Topic name"
            name="nameTopic"
            value={addNameTopic}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Description of the topic"
            name="descriptionTopic"
            value={descriptionTopic}
            onChange={handleChange}
            fullWidth
            required
          />
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={category}
              onChange={handleChange}
              required
            >
              <MenuItem value="Programming">Programming</MenuItem>
              <MenuItem value="Announcements and news">
                Announcements and news
              </MenuItem>
              <MenuItem value="General discussions">
                General discussions
              </MenuItem>
              <MenuItem value="Healthy Lifestyle">Healthy Lifestyle</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: '100px' }}
          >
            Publish
          </Button>
        </Box>
      </form>
    </Container>
  );
};
