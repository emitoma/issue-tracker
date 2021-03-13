import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import css from './style.module.scss';

const NavbarLink = ({ page }) => {
  return (
    <Link className={css['Nav-link']} to={page}>
      {page}
    </Link>
  );
};

export default memo(NavbarLink);
