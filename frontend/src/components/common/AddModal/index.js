import React, { memo, useEffect, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import ReactDOM from 'react-dom';

import { useDispatch, useSelector } from 'react-redux';
import addProject from '../../../lib/project/redux/thunks/add-project';

import Button from 'react-bootstrap/Button';
import AddProjectForm from '../../projects/AddProjectForm';
import projectSelectors from '../../../lib/project/redux/selector';
import projectActions from '../../../lib/project/redux/actions';
import projectActionTypes from '../../../lib/project/redux/action-types';
import AddIssueForm from '../../issues/AddIssueForm';

const AddModal = ({ title, show, setShow }) => {
  const dispatch = useDispatch();

  const errors = useSelector(projectSelectors.getProjectErrors);
  const isSaved = useSelector(projectSelectors.getIsProjectSaved);

  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const handleClose = () => setShow(false);

  const saveProject = () => {
    const formData = {
      name,
      description,
    };
    dispatch(addProject({ formData }));
  };

  useEffect(() => {
    if (isSaved) {
      setShow(false);
    }
  }, [isSaved]);

  useEffect(() => {
    if (!show) {
      setName('');
      setDescription('');
      dispatch(projectActions.setIsProjectSaved(false));
      dispatch(projectActions.clearErrors());
    }
  }, [show]);

  return ReactDOM.createPortal(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Add new {title}</Modal.Header>
      <Modal.Body>
        <AddProjectForm
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          errors={errors}
        />
        {/*TODO do the same with add issue form*/}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveProject}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById('root')
  );
};

export default memo(AddModal);
