import { Route, Routes } from 'react-router-dom';

import { Homep } from 'page/Home';
import { Administrator } from 'page/Administrator';
import { User } from 'page/User';
import { Guest } from 'page/Guest';
import { AddTopic } from './administratorMenu/AddTopic';
import { TopicDetails } from 'page/TopicDetails';
import { RenderTopicDetails } from './renderTopicDetails/RenderTopicDetails';
import { TopicDetailsGuest } from 'page/TopicDetailsGuest';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homep />} />
        <Route path="/administrator" element={<Administrator />} />
        <Route path="/administrator/addtopic" element={<AddTopic />} />
        <Route path="/administrator/topic/:Id" element={<TopicDetails />} />

        <Route path="/user" element={<User />} />
        <Route path="/user/topic/:Id" element={<TopicDetails />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/guest/topic/:Id" element={<TopicDetailsGuest />} />
      </Routes>
    </div>
  );
};
