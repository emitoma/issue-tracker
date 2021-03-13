import React, { memo } from 'react';
import classNames from 'classnames';
import NavbarLink from './Navbar-link';
import css from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../lib/auth/redux/selector';
import authActions from '../../lib/auth/redux/actions';
import projectActions from '../../lib/project/redux/actions';
import issueActions from '../../lib/issue/redux/actions';
import { Redirect } from 'react-router-dom';

const Navbar = ({ className }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const links = ['Inbox', 'Projects', 'Settings'];

  const classList = classNames(className, css['Nav']);

  const handleClick = () => {
    dispatch(authActions.clearAuth());
    dispatch(projectActions.clearProject());
    dispatch(issueActions.clearIssues());

    localStorage.removeItem('token');

    return <Redirect to="/auth/login" />;
    //TODO fix redirect
  };

  return (
    <nav className={classList}>
      <h1 className={css['Nav-title']}>Issue Tracker</h1>
      <h2 className={css['Nav-greeting']}>Welcome back!</h2>
      <div>
        {links.map((link) => (
          <NavbarLink page={link} />
        ))}
      </div>
      <h2 className={css['logout']} onClick={handleClick}>
        Log Out
      </h2>
    </nav>
  );
};

export default memo(Navbar);
