import { useSelector } from 'react-redux';

export const RenderTopic = () => {
  const allTopic = useSelector(state => state.topics.topicsArr);

  console.log(allTopic);

  return (
    <div>
      {allTopic.length > 0 ? (
        <ul>
          {allTopic.map(({ nameTopic, descriptionTopic }, index) => (
            <li key={index}>
              <h1>{nameTopic}</h1>
              <p>{descriptionTopic}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Тем не має</h1>
      )}
    </div>
  );
};
