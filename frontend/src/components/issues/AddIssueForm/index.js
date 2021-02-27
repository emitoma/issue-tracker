import React, { memo } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';

const AddIssueForm = ({}) => {
  //TODO
  return (
    <Form>
      {/*{errors.general && <Alert variant="danger">{errors.general}</Alert>}

      <Form.Group>
        <Form.Label>Issue Title</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setIssueTitle(e.target.value)}
          value={issueTitle}
        />
      </Form.Group>*/}

      <Dropdown>
        <Dropdown.Toggle variant="success" id="status">
          Status
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Done</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Todo</Dropdown.Item>
          <Dropdown.Item href="#/action-3">In progress</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  );
};

export default memo(AddIssueForm);
