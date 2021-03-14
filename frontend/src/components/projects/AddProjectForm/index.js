import React, { memo } from 'react';

import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const AddProjectForm = ({
  name,
  setName,
  description,
  setDescription,
  errors,
}) => {
  return (
    <>
      {errors.general && <Alert variant="danger">{errors.general}</Alert>}
      <Form.Group>
        <Form.Label>Project Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Project Description</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </Form.Group>
    </>
  );
};
export default memo(AddProjectForm);
