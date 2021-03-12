import React from 'react';
import classNames from 'classnames';
import SidebarLink from './sidebar-link';

const Sidebar = ({ className }) => {
  const links = ['Inbox', 'Projects', 'Issues', 'Settings'];
  /*
        const classNames = classNames(className, )
    */
  return (
    <nav className={className}>
      <h1>Issue Tracker</h1>
      <h2>Welcome, User!</h2>
      <div>
        {links.map((link) => (
          <SidebarLink page={link} />
        ))}
      </div>
      <h2>Log Out</h2>
    </nav>
  );
};

export default Sidebar;
