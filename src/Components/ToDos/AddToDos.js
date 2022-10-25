import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function AddToDos(props) {
  const newStyle = {
    width : "60%"
  }
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if(!title || !desc)
      alert('Title or description cannot be blank')
    else
      props.addToDos(title, desc);
  }
  return (
    <div className='container' style={newStyle}>
      <h3 className='text-center'>
        Add ToDo's
      </h3>
      <Form onSubmit={submit}>
        <Form.Group className="my-4" controlId="title">
          <Form.Label>Todo title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" onChange={ (e)=>setTitle(e.target.value) } />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" onChange={ (e)=>setDesc(e.target.value) }/>
        </Form.Group>
        <Button className='btn btn-success' type="submit">
          Add to list
        </Button>
      </Form>
    </div>
  );
}

export default AddToDos;