import { RenderTopicDetails } from 'components/renderTopicDetails/RenderTopicDetails';
import { AddPost } from 'components/addPost/AddPost';
import style from './page.module.css';

export const TopicDetails = () => {
  return (
    <div className={style.conteiner}>
      <button>Повернутись</button>
      <RenderTopicDetails />
      <AddPost />
    </div>
  );
};
