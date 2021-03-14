import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import authActions from '../../lib/auth/redux/actions';

import classNames from 'classnames';
import css from './style.module.scss';

const Navbar = ({ className }) => {
  const dispatch = useDispatch();

  const classList = classNames(className, css['Nav']);

  const handleClick = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav className={classList}>
      <h1 className={css['Nav-title']}>Issue Tracker</h1>
      <h2 className={css['Nav-greeting']}>Welcome back!</h2>
      <ul className={css['Nav-list']}>
        <li>
          <NavLink
            to="/"
            className={css['Nav-list-link']}
            activeClassName={css['active']}
          >
            Inbox
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={css['Nav-list-link']}
            activeClassName={css['active']}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={css['Nav-list-link']}
            activeClassName={css['active']}
          >
            Settings
          </NavLink>
        </li>
      </ul>
      <h2 className={css['logout']} onClick={handleClick}>
        Log Out
      </h2>
    </nav>
  );
};

export default memo(Navbar);
