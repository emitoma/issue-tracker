import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
//
import loadIssues from '../../../lib/issue/redux/thunks/load-issues';
import issueSelectors from '../../../lib/issue/redux/selector';
import issueActions from '../../../lib/issue/redux/actions';
import IssueListItem from '../../../components/issues/IssueListItem';
import Button from 'react-bootstrap/Button';
import AddModal from '../../../components/common/AddModal';

const IssueList = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { id } = useParams();

  const isInitialized = useSelector(issueSelectors.getIsInitialized);
  const isLoading = useSelector(issueSelectors.getIsLoading);
  const issueIds = useSelector(issueSelectors.getIssueIds);

  useEffect(() => {
    if (!isLoading && !isInitialized) {
      dispatch(loadIssues(id));
    }
  }, [isLoading, isInitialized, id]);

  useEffect(() => {
    return () => {
      dispatch(issueActions.clearIssues());
    };
  }, []);

  const showModal = () => {
    setShow(true);
  };

  console.log(issueIds);
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
      <AddModal title="Issue" show={show} setShow={setShow} />
    </>
  );
};

export default memo(IssueList);
