import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

export const RenderTopic = () => {
  const allTopic = useSelector(state => state.topics.topicsArr);
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/administrator');
  const isUserPage = location.pathname.startsWith('/user');

  return (
    <div style={{ marginRight: '50px' }}>
      <p>Всі теми</p>
      {allTopic.length > 0 ? (
        <ul>
          {allTopic.map(({ id, nameTopic, descriptionTopic }, index) => (
            <Link
              to={
                isAdminPage
                  ? `/administrator/topic/${id}`
                  : isUserPage
                  ? `/user/topic/${id}`
                  : `/guest/topic/${id}`
              }
              key={index}
            >
              <li
                key={index}
                style={{ border: 'solid 1px black', marginBottom: '10px' }}
              >
                <h1>{nameTopic}</h1>
                <p>{descriptionTopic}</p>
                <h4>Категорія</h4>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <h1>Тем не має</h1>
      )}
    </div>
  );
};
