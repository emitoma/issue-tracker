import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import loadIssues from '../../../lib/issue/redux/thunks/load-issues';

const IssueList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    dispatch(loadIssues(id));
  }, [id]);

  return <div>Issue List</div>;
};

export default memo(IssueList);
