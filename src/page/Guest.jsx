import { Header } from 'components/header/Header';

import { RenderTopic } from '../components/renderTopic/RenderTopic';

export const Guest = () => {
  return (
    <div>
      <Header />
      <h1>Page Guest</h1>
      <RenderTopic />
    </div>
  );
};
