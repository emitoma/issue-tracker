import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//
import projectSelectors from '../../../lib/project/redux/selector';
import css from './style.module.scss';
import Button from 'react-bootstrap/Button';
import deleteProject from '../../../lib/project/redux/thunks/delete-project';

const ProjectListItem = ({ id }) => {
  const dispatch = useDispatch();
  const project = useSelector((state) =>
    projectSelectors.getProjectById(state, id)
  );

  const onClickHandler = () => {
    console.log(project);
    dispatch(deleteProject(project.id));
  };

  return (
    <div className={css.ProjectListItem}>
      <Link to={`/projects/${id}`} className={css.projectTitle}>
        {project.name}
      </Link>
      <p>id: {project.id}</p>
      <Button type="button" variant="danger" onClick={onClickHandler}>
        Delete
      </Button>
    </div>
  );
};

export default memo(ProjectListItem);
