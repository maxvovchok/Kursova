import { Header } from 'components/header/Header';
import { NavLink } from 'react-router-dom';

import { RenderTopic } from '../components/renderTopic/RenderTopic';

export const Administrator = () => {
  return (
    <div>
      <Header />
      <h1>Page Administrator</h1>
      <NavLink to={'addtopic'}>Додати тему</NavLink>
      <RenderTopic />
    </div>
  );
};
