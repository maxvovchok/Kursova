import { Route, Routes } from 'react-router-dom';

import { Homep } from 'page/Home';
import { Administrator } from 'page/Administrator';
import { User } from 'page/User';
import { Guest } from 'page/Guest';
import { AddTopic } from './administratorMenu/AddTopic';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Kursova" element={<Homep />} />
        <Route path="/administrator" element={<Administrator />} />
        <Route path="/administrator/addtopic" element={<AddTopic />} />

        <Route path="/user" element={<User />} />
        <Route path="/guest" element={<Guest />} />
      </Routes>
    </div>
  );
};
