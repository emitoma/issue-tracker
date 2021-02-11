import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
//
import loadIssues from '../../../lib/issue/redux/thunks/load-issues';
import issueSelectors from '../../../lib/issue/redux/selector';
import issueActions from '../../../lib/issue/redux/actions';
import IssueListItem from '../../../components/issues/IssueListItem';

const IssueList = () => {
  const dispatch = useDispatch();

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

  console.log(issueIds);
  return (
    <div>
      <h1>Issues</h1>
      {issueIds.map((id) => (
        <IssueListItem key={id} id={id} />
      ))}
    </div>
  );
};

export default memo(IssueList);
