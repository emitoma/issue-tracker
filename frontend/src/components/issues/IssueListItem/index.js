import React, { memo } from 'react';
import css from './style.module.scss';
import { useSelector } from 'react-redux';
import issueSelectors from '../../../lib/issue/redux/selector';

const IssueListItem = ({ id }) => {
  const issue = useSelector((state) => issueSelectors.getIssueById(state, id));

  console.log(issue);
  return <div className={css.IssueListItem}>{issue.title}</div>;
};

export default memo(IssueListItem);
