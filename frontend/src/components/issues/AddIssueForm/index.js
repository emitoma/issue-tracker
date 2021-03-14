import React, { memo } from 'react';

import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const AddIssueForm = ({
  title,
  setTitle,
  issueStatus,
  setIssueStatus,
  errors,
}) => {
  const handleSelect = (e) => {
    setIssueStatus(e);
  };
  return (
    <>
      {errors.general && <Alert variant="danger">{errors.general}</Alert>}

      <Form.Group>
        <Form.Label>Issue Title</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </Form.Group>

      <DropdownButton
        variant="success"
        id="status"
        title="Status"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="todo">Todo</Dropdown.Item>
        <Dropdown.Item eventKey="in_progress">In progress</Dropdown.Item>
        <Dropdown.Item eventKey="done">Done</Dropdown.Item>
      </DropdownButton>
      <h4>Status: {issueStatus}</h4>
    </>
  );
};

export default memo(AddIssueForm);
