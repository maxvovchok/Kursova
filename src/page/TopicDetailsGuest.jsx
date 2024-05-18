import { RenderPost } from 'components/addPost/RenderPost';
import { RenderTopicDetails } from 'components/renderTopicDetails/RenderTopicDetails';
import style from './page.module.css';

export const TopicDetailsGuest = () => {
  return (
    <div className={style.conteiner}>
      <button>Повернутись</button>
      <RenderTopicDetails />
      <RenderPost />
    </div>
  );
};
