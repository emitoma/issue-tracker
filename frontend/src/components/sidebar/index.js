import React, { memo } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import authSelectors from '../../lib/auth/redux/selector';
import authActions from '../../lib/auth/redux/actions';
import projectActions from '../../lib/project/redux/actions';
import issueActions from '../../lib/issue/redux/actions';

import css from './style.module.scss';

const Navbar = ({ className }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const links = ['Inbox', 'Projects', 'Settings'];

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
            to="/projects/5"
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
            to="/projects"
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
