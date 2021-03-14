import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import authActions from '../../lib/auth/redux/actions';

import classNames from 'classnames';
import css from './style.module.scss';
import authSelectors from '../../lib/auth/redux/selector';

const Navbar = ({ className }) => {
  const dispatch = useDispatch();

  const user = useSelector(authSelectors.getUser);

  const handleClick = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav className={classNames(css['Nav'], className)}>
      <h1 className={css['Nav-title']}>Issue Tracker</h1>
      <h2 className={css['Nav-greeting']}>Welcome back!</h2>
      <p>Logged in as: {user}</p>
      <ul className={css['Nav-list']}>
        <li>
          <NavLink
            to="/projects"
            className={css['Nav-list-link']}
            activeClassName={css['active']}
          >
            Projects
          </NavLink>
        </li>
      </ul>
      <h2 className={css['logout']} onClick={handleClick}>
        Log out
      </h2>
    </nav>
  );
};

export default memo(Navbar);
