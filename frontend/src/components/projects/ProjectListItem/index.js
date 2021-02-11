import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//
import projectSelectors from '../../../lib/project/redux/selector';
import css from './style.module.scss';

const ProjectListItem = ({ id }) => {
  const project = useSelector((state) =>
    projectSelectors.getProjectById(state, id)
  );

  return (
    <Link to={`/projects/${id}`} className={css.ProjectListItem}>
      {project.name}
    </Link>
  );
};

export default memo(ProjectListItem);
