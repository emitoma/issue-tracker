import React, { memo, useState } from 'react';
import css from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import issueSelectors from '../../../lib/issue/redux/selector';
import deleteIssue from '../../../lib/issue/redux/thunks/delete-issue';

import Button from 'react-bootstrap/Button';
import IssueModal from '../../common/Modal/IssueModal';

const IssueListItem = ({ issueId, projectId }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const issue = useSelector((state) =>
    issueSelectors.getIssueById(state, issueId)
  );

  const handleDelete = () => {
    console.log('component id', issueId);
    dispatch(deleteIssue(issue.project_id, issue.id));
  };

  const showModal = () => {
    setShow(true);
  };

  return (
    <div className={css.IssueListItem}>
      <h3>{issue.title}</h3>
      <p>{issue.status}</p>
      <Button type="button" variant="warning" onClick={showModal}>
        Edit
      </Button>
      <Button type="button" variant="danger" onClick={handleDelete}>
        Delete
      </Button>
      <IssueModal
        show={show}
        setShow={setShow}
        issueId={issueId}
        projectId={projectId}
      />
    </div>
  );
};

export default memo(IssueListItem);
