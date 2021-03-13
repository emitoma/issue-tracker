import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProjectSelectors from '../../lib/project/redux/selector';
import projectActions from '../../lib/project/redux/actions';
import loadProjects from '../../lib/project/redux/thunks/load-projects';

import css from './style.module.scss';
import ProjectListItem from '../../components/projects/ProjectListItem';
import ProjectModal from '../../components/common/Modal/ProjectModal';

import Button from 'react-bootstrap/Button';

import Navbar from '../../components/sidebar';

const Projects = () => {
  const dispatch = useDispatch();

  const isInitialized = useSelector(ProjectSelectors.getIsInitialized);
  const isLoading = useSelector(ProjectSelectors.getIsLoading);
  const projectIds = useSelector(ProjectSelectors.getProjectIds);
  const error = useSelector(ProjectSelectors.getProjectErrors);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isLoading && !isInitialized) {
      dispatch(loadProjects());
    }
  }, [isLoading, isInitialized]);

  useEffect(() => {
    // cleanup
    return () => {
      dispatch(projectActions.clearProject());
    };
  }, []);

  const showModal = () => {
    setShow(true);
  };

  return (
    <>
      <div className={css['Page']}>
        <Navbar />
        <h1>My Projects</h1>
        <div className={css.Projects}>
          {projectIds.map((id) => (
            <ProjectListItem key={id} id={id} />
          ))}
          <div className={css.addProject}>
            <Button variant="primary" type="submit" onClick={showModal}>
              Add New Project
            </Button>
          </div>
        </div>
      </div>
      <ProjectModal show={show} setShow={setShow} />
    </>
  );
};

export default Projects;
