import { Header } from 'components/header/Header';
import { NavLink } from 'react-router-dom';
import { SearchCategory } from 'components/searchСategory/SearchCategory';
import { RenderTopic } from '../components/renderTopic/RenderTopic';
import style from './page.module.css';

export const Administrator = () => {
  return (
    <div className={style.conteiner}>
      <Header />
      <h1>Page Administrator</h1>
      <div className={style.box}>
        <SearchCategory />
        <NavLink style={{ marginBottom: '40px' }} to={'addtopic'}>
          Додати тему
        </NavLink>
      </div>
      <RenderTopic />
    </div>
  );
};
