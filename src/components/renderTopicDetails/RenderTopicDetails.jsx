import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
    <div>
      <h1>{renderName}</h1>
      <p>{renderDescriptionTopic}</p>
    </div>
  );
};
