import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
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
import { addTopic, updateTopic } from '../../redux/slice/TopicSlice';

export const AddTopic = () => {
  const location = useLocation();
  const topicToEdit = location.state?.topic || null;

  const [addNameTopic, setAddNameTopic] = useState('');
  const [descriptionTopic, setDescriptionTopic] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (topicToEdit) {
      setAddNameTopic(topicToEdit.nameTopic);
      setDescriptionTopic(topicToEdit.descriptionTopic);
      setCategory(topicToEdit.category);
    }
  }, [topicToEdit]);

  const allTopics = useSelector(state => state.topics.topicsArr);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const isTopicExists = allTopics.some(
      topic => topic.nameTopic === addNameTopic && topic.id !== topicToEdit?.id
    );

    if (isTopicExists) {
      Notiflix.Notify.failure('The topic already exists');
    } else {
      const newTopic = {
        id: topicToEdit ? topicToEdit.id : nanoid(),
        nameTopic: addNameTopic,
        descriptionTopic,
        category,
        post: topicToEdit ? topicToEdit.post : [],
      };

      if (topicToEdit) {
        dispatch(updateTopic(newTopic));
        Notiflix.Notify.success('Topic edited successfully');
      } else {
        dispatch(addTopic(newTopic));
        Notiflix.Notify.success('Topic successfully added');
      }

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
        {topicToEdit ? 'Edit Topic' : 'Add a New Topic'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Topic Name"
            name="nameTopic"
            value={addNameTopic}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Description"
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
                Announcements and News
              </MenuItem>
              <MenuItem value="General discussions">
                General Discussions
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
            {topicToEdit ? 'Save' : 'Publish'}
          </Button>
        </Box>
      </form>
    </Container>
  );
};
