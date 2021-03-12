import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

import AddIssueForm from '../../../issues/AddIssueForm';
import issueSelectors from '../../../../lib/issue/redux/selector';
import addIssue from '../../../../lib/issue/redux/thunks/add-issue';

const IssueModal = ({ projectId, show, setShow }) => {
  const dispatch = useDispatch();

  const errors = useSelector(issueSelectors.getIssueErrors);
  const isSaved = useSelector(issueSelectors.getIsIssueSaved);

  const [title, setTitle] = useState('');
  const [issueStatus, setIssueStatus] = useState('');

  const saveIssue = () => {
    console.log(issueStatus, projectId);
    const formData = {
      title,
      issueStatus,
    };
    dispatch(addIssue(projectId, formData));
  };

  useEffect(() => {
    if (isSaved) {
      setShow(false);
    }
  }, [isSaved]);

  const handleClose = () => setShow(false);

  return ReactDOM.createPortal(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Add new</Modal.Header>
      <Modal.Body>
        <AddIssueForm
          title={title}
          setTitle={setTitle}
          issueStatus={issueStatus}
          setIssueStatus={setIssueStatus}
          errors={errors}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveIssue}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById('root')
  );
};
export default memo(IssueModal);
