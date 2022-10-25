import React from 'react'

function ToDoItems (props) {
  return (
    <div className='container'>
        <h4>{props.todos.title}</h4>
        <p>{props.todos.disc}</p>
        <button className='btn btn-danger mb-3' onClick={ ()=>{props.Delete(props.todos)} }>Delete</button>
    </div>
  )
}

export default ToDoItems