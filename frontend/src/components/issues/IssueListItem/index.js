import React, { memo } from 'react';
import css from './style.module.scss';
import { useSelector } from 'react-redux';
import issueSelectors from '../../../lib/issue/redux/selector';
import Button from 'react-bootstrap/Button';
import AddIssueForm from '../AddIssueForm';

const IssueListItem = ({ id }) => {
  const issue = useSelector((state) => issueSelectors.getIssueById(state, id));

  console.log(issue);
  return (
    <div className={css.IssueListItem}>
      <h3>{issue.title}</h3>
      <p>{issue.status}</p>
      <Button type="button" variant="warning">
        Edit
      </Button>
      <Button type="button" variant="danger">
        Delete
      </Button>
    </div>
  );
};

export default memo(IssueListItem);
