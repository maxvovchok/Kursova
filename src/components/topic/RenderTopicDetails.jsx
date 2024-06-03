import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

export const RenderTopicDetails = () => {
  const [renderName, setRenderName] = useState('');
  const [renderDescriptionTopic, setRenderDescriptionTopic] = useState('');
  const allTopic = useSelector(state => state.topics.topicsArr);
  const params = useParams();

  useEffect(() => {
    function getTopic() {
      const topic = allTopic.find(idTopic => idTopic.id === params.Id);
      if (topic) {
        setRenderName(topic.nameTopic);
        setRenderDescriptionTopic(topic.descriptionTopic);
      }
    }
    getTopic();
  }, [params.Id, allTopic]);

  return (
    <Box p={2}>
      <Typography variant="h4" sx={{ marginBottom: '16px' }}>
        {renderName}
      </Typography>
      <Typography>{renderDescriptionTopic}</Typography>
    </Box>
  );
};
