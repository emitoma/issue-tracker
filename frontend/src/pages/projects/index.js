import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProjectSelectors from '../../lib/project/redux/selector';
import loadProjects from '../../lib/project/redux/thunks/load-projects';
import projectActions from '../../lib/project/redux/actions';
import ProjectListItem from '../../components/projects/ProjectListItem';

const Projects = () => {
  const dispatch = useDispatch();

  const isInitialized = useSelector(ProjectSelectors.getIsInitialized);
  const isLoading = useSelector(ProjectSelectors.getIsLoading);
  const projectIds = useSelector(ProjectSelectors.getProjectIds);
  const error = useSelector(ProjectSelectors.getProjectErrors);

  useEffect(() => {
    if (!isLoading && !isInitialized) {
      dispatch(loadProjects());
    }
  }, [isLoading, isInitialized]);

  useEffect(() => {
    return () => {
      dispatch(projectActions.clearProject());
    };
  }, []);

  return (
    <div>
      This is a project page
      <div>
        {projectIds.map((id) => (
          <ProjectListItem key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
