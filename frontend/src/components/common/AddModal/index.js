import React, { memo, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import ReactDOM from 'react-dom';

import { useDispatch } from 'react-redux';
import addProject from '../../../lib/project/redux/thunks/add-project';

import Button from 'react-bootstrap/Button';
import AddProjectForm from '../../projects/AddProjectForm';

const AddModal = ({ title, show, setShow }) => {
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const saveProject = () => {
    dispatch(addProject());
  };

  return ReactDOM.createPortal(
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Add new {title}</Modal.Header>
      <Modal.Body>
        <AddProjectForm />
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
