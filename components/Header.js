import React from 'react';
import headerStyles from '../styles/Header.module.css';

function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span>
        {' '}
        News
      </h1>
      <p className={headerStyles.description}>
        {' '}
        Keep up to date with with latest DevNews
      </p>
    </div>
  );
}

export default Header;
