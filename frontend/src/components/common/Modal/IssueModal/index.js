import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

import AddIssueForm from '../../../issues/AddIssueForm';
import issueSelectors from '../../../../lib/issue/redux/selector';
import addIssue from '../../../../lib/issue/redux/thunks/add-issue';
import issueActions from '../../../../lib/issue/redux/actions';
import updateIssue from '../../../../lib/issue/redux/thunks/update-issue';
import Form from 'react-bootstrap/Form';

const IssueModal = ({ projectId, show, setShow, issueId = null }) => {
  const dispatch = useDispatch();

  const issue = useSelector((state) => {
    if (!issueId) {
      return null;
    }

    return issueSelectors.getIssueById(state, issueId);
  });

  const errors = useSelector(issueSelectors.getIssueErrors);
  const isSaved = useSelector(issueSelectors.getIsIssueSaved);
  const isEdited = useSelector(issueSelectors.getIsIssueEdited);

  const [title, setTitle] = useState(issue ? issue.title : '');
  const [issueStatus, setIssueStatus] = useState(issue ? issue.status : 'todo');

  const handleClose = () => setShow(false);

  const saveIssue = (e) => {
    e.preventDefault();
    const formData = {
      title,
      issueStatus,
    };

    if (issue) {
      dispatch(updateIssue(projectId, issueId, formData));
    } else {
      dispatch(addIssue(projectId, formData));
    }
  };

  useEffect(() => {
    if (isSaved || isEdited) {
      setShow(false);
    }
    //eslint-disable-next-line
  }, [isSaved, isEdited]);

  useEffect(() => {
    if (!show) {
      setTitle('');
      setIssueStatus('');
      dispatch(issueActions.setIsIssueSaved(false));
      dispatch(issueActions.clearErrors());
    }
    //eslint-disable-next-line
  }, [show]);

  useEffect(() => {
    setTitle(issue ? issue.title : '');
    setIssueStatus(issue ? issue.status : 'todo');
  }, [issue]);

  return ReactDOM.createPortal(
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={saveIssue}>
        <Modal.Header closeButton>
          {!issue ? 'Add New Issue' : 'Edit issue'}
        </Modal.Header>
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
          <Button type="button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>,
    document.getElementById('root')
  );
};

export default memo(IssueModal);
