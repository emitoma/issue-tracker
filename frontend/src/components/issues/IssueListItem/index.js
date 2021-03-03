import React, { memo } from 'react';
import css from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import issueSelectors from '../../../lib/issue/redux/selector';
import deleteIssue from '../../../lib/issue/redux/thunks/delete-issue';

import Button from 'react-bootstrap/Button';
import AddIssueForm from '../AddIssueForm';

const IssueListItem = ({ id }) => {
  const dispatch = useDispatch();
  const issue = useSelector((state) => issueSelectors.getIssueById(state, id));

  const handleDelete = () => {
    console.log('component id', id);
    dispatch(deleteIssue(issue.project_id, issue.id));
  };
  return (
    <div className={css.IssueListItem}>
      <h3>{issue.title}</h3>
      <p>{issue.status}</p>
      <Button type="button" variant="warning">
        Edit
      </Button>
      <Button type="button" variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default memo(IssueListItem);
