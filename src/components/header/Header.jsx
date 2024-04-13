import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const handleClick = e => {
    console.log(e.target.textContent);
  };

  return (
    <nav>
      <Link to="/administrator">Administrator</Link>
      <Link to="/user">User</Link>
      <Link to="/guest">Guest</Link>
    </nav>
  );
};
