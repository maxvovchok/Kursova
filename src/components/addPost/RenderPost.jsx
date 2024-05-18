import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './RenderPost.module.css';

export const RenderPost = () => {
  const { Id } = useParams();
  const allTopic = useSelector(state => state.topics.topicsArr);
  const topic = allTopic.find(t => t.id === Id);

  return (
    <div>
      <p style={({ marginBottom: '30px' }, { marginTop: '50px' })}>Всі пости</p>
      <ul>
        {topic && topic.post.length >= 1
          ? topic.post.map(({ content }, index) => (
              <li key={index} className={style.postItem}>
                {content}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
