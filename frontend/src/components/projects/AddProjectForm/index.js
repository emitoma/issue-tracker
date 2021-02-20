import React, { useState, memo } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddProjectForm = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  return (
    <Form>
      <Form.Group>
        <Form.Label>Project Name</Form.Label>
        <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Project Description</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};
export default memo(AddProjectForm);
