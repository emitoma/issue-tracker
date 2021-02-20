import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProjectSelectors from '../../lib/project/redux/selector';
import projectActions from '../../lib/project/redux/actions';
import loadProjects from '../../lib/project/redux/thunks/load-projects';

import ProjectListItem from '../../components/projects/ProjectListItem';
import AddModal from '../../components/common/AddModal';
import Button from 'react-bootstrap/Button';

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
      <div>
        This is a project page
        <div>
          {projectIds.map((id) => (
            <ProjectListItem key={id} id={id} />
          ))}
        </div>
        <Button variant="primary" type="submit" onClick={showModal}>
          Add New Project
        </Button>
        <AddModal title="Project" show={show} setShow={setShow} />
      </div>
    </>
  );
};

export default Projects;
