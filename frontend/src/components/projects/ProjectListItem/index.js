import React, { memo } from 'react';
import { useSelector } from 'react-redux';
//
import projectSelectors from '../../../lib/project/redux/selector';
import css from './style.module.scss';

const ProjectListItem = ({ id }) => {
  const project = useSelector((state) =>
    projectSelectors.getProjectById(state, id)
  );

  return <div className={css.ProjectListItem}>{project.name}</div>;
};

export default memo(ProjectListItem);
