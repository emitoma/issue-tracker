import React from 'react';
import cn from 'classnames';

import css from './style.module.scss';

const AuthHeader = ({ isLogin, setIsLogin }) => {
  return (
    <header className={cn(css['Header'], 'd-flex')}>
      <div className={css['block']}>
        <button
          type="button"
          className={cn(css['link'], { [css['is-active']]: !isLogin })}
          onClick={() => {
            setIsLogin(false);
          }}
        >
          Register
        </button>
      </div>
      <div className={css['block']}>
        <button
          type="button"
          className={cn(css['link'], { [css['is-active']]: isLogin })}
          onClick={() => {
            setIsLogin(true);
          }}
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default AuthHeader;
