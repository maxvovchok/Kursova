import { Header } from 'components/header/Header';

import { RenderTopic } from '../components/renderTopic/RenderTopic';
import { SearchCategory } from 'components/searchСategory/SearchCategory';
import style from './page.module.css';

export const User = () => {
  return (
    <div className={style.conteiner}>
      <Header />
      <h1>Page User</h1>
      <div className={style.box}>
        <SearchCategory />
      </div>
      <RenderTopic />
    </div>
  );
};
