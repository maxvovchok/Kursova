import { Route, Routes } from 'react-router-dom';
import { Home } from 'page/Home';
import { ForumTopics } from 'page/ForumTopics';
import { AddTopics } from '../page/AddTopics';
import { TopicDetails } from 'page/TopicDetails';
import { TopicDetailsGuest } from 'page/TopicDetailsGuest';
import { LogInPage } from 'page/LogInPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/administrator" element={<ForumTopics />} />
        <Route path="/administrator/addtopic" element={<AddTopics />} />
        <Route path="/administrator/topic/:Id" element={<TopicDetails />} />
        <Route path="/login" element={<LogInPage />} />

        <Route path="/user" element={<ForumTopics />} />
        <Route path="/user/topic/:Id" element={<TopicDetails />} />
        <Route path="/guest" element={<ForumTopics />} />
        <Route path="/guest/topic/:Id" element={<TopicDetailsGuest />} />
      </Routes>
    </div>
  );
};
