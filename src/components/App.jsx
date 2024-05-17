import { Route, Routes } from 'react-router-dom';

import { Homep } from 'page/Home';
import { Administrator } from 'page/Administrator';
import { User } from 'page/User';
import { Guest } from 'page/Guest';
import { AddTopic } from './administratorMenu/AddTopic';
import { TopicDetails } from 'page/TopicDetails';
import { RenderTopicDetails } from './renderTopicDetails/RenderTopicDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/kursova" element={<Homep />} />
        <Route path="/kursova/administrator" element={<Administrator />} />
        <Route path="/kursova/administrator/addtopic" element={<AddTopic />} />
        <Route
          path="/kursova/administrator/topic/:Id"
          element={<TopicDetails />}
        />

        <Route path="/kursova/user" element={<User />} />
        <Route path="/kursova/user/topic/:Id" element={<TopicDetails />} />
        <Route path="/kursova/guest" element={<Guest />} />
        <Route
          path="/kursova/guest/topic/:Id"
          element={<RenderTopicDetails />}
        />
      </Routes>
    </div>
  );
};
