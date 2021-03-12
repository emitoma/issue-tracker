import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
//
import loadIssues from '../../../lib/issue/redux/thunks/load-issues';
import issueSelectors from '../../../lib/issue/redux/selector';
import issueActions from '../../../lib/issue/redux/actions';
import IssueListItem from '../../../components/issues/IssueListItem';
import Button from 'react-bootstrap/Button';
import IssueModal from '../../../components/common/Modal/IssueModal';

const IssueList = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { id: projectId } = useParams();

  const isInitialized = useSelector(issueSelectors.getIsInitialized);
  const isLoading = useSelector(issueSelectors.getIsLoading);
  const issueIds = useSelector(issueSelectors.getIssueIds);

  useEffect(() => {
    if (!isLoading && !isInitialized) {
      dispatch(loadIssues(projectId));
    }
  }, [isLoading, isInitialized, projectId]);

  useEffect(() => {
    return () => {
      dispatch(issueActions.clearIssues());
    };
  }, []);

  const showModal = () => {
    setShow(true);
  };

  return (
    <>
      <div>
        <h1>Issues</h1>
        <Button variant="primary" type="submit" onClick={showModal}>
          Add New Issue
        </Button>
        {issueIds.map((id) => (
          <IssueListItem key={id} id={id} />
        ))}
      </div>
      <IssueModal show={show} setShow={setShow} projectId={projectId} />
    </>
  );
};

export default memo(IssueList);
