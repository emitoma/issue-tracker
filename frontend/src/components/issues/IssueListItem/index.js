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
    <div className={css['IssueListItem']}>
      <h3>{issue.title}</h3>
      <p className={css['status']}>{issue.status}</p>

      <div className={css['actions']}>
        <Button
          className={css['action']}
          type="button"
          variant="warning"
          onClick={showModal}
          size="sm"
        >
          Edit
        </Button>
        <Button
          className={css['action']}
          type="button"
          variant="danger"
          onClick={handleDelete}
          size="sm"
        >
          Delete
        </Button>
      </div>

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
