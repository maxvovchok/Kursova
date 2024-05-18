import { Header } from 'components/header/Header';

import { RenderTopic } from '../components/renderTopic/RenderTopic';
import style from './page.module.css';
import { SearchCategory } from 'components/searchСategory/SearchCategory';

export const Guest = () => {
  return (
    <div className={style.conteiner}>
      <Header />
      <h1>Page Guest</h1>
      <div className={style.box}>
        <SearchCategory />
      </div>
      <RenderTopic />
    </div>
  );
};
