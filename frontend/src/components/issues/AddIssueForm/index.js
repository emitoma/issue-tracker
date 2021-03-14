import React, { memo } from 'react';

import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import translateIssueStatus from '../../../lib/issue/utils/translateIssueStatus';

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
        title={translateIssueStatus(issueStatus)}
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="todo">
          {translateIssueStatus('todo')}
        </Dropdown.Item>
        <Dropdown.Item eventKey="in_progress">
          {translateIssueStatus('in_progress')}
        </Dropdown.Item>
        <Dropdown.Item eventKey="done">
          {translateIssueStatus('done')}
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default memo(AddIssueForm);
