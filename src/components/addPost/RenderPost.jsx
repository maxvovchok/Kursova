import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const RenderPost = () => {
  const { Id } = useParams();
  const allTopic = useSelector(state => state.topics.topicsArr);
  const topic = allTopic.find(t => t.id === Id);

  return (
    <div>
      <ul>
        {topic && topic.post.length >= 1
          ? topic.post.map(({ content }, index) => (
              <li key={index}>{content}</li>
            ))
          : null}
      </ul>
    </div>
  );
};
