import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import addProject from '../../../../lib/project/redux/thunks/add-project';
import AddProjectForm from '../../../projects/AddProjectForm';
import projectSelectors from '../../../../lib/project/redux/selector';
import projectActions from '../../../../lib/project/redux/actions';
import Form from 'react-bootstrap/Form';

const ProjectModal = ({ show, setShow }) => {
  const dispatch = useDispatch();

  const errors = useSelector(projectSelectors.getProjectErrors);
  const isSaved = useSelector(projectSelectors.getIsProjectSaved);

  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const handleClose = () => setShow(false);

  const saveProject = (e) => {
    e.preventDefault();

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
      <Form onSubmit={saveProject}>
        <Modal.Header closeButton>Add new Project</Modal.Header>
        <Modal.Body>
          <AddProjectForm
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
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

export default memo(ProjectModal);
