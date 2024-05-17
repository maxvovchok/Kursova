import { RenderPost } from 'components/addPost/RenderPost';
import { RenderTopicDetails } from 'components/renderTopicDetails/RenderTopicDetails';

export const TopicDetailsGuest = () => {
  return (
    <>
      <RenderTopicDetails />
      <RenderPost />
    </>
  );
};
