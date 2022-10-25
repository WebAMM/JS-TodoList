import React from 'react'
import ToDoItems from './ToDoItems'

function ToDos({todolist, onDelete}) {
  return (
    <div className='container'>
        <h3 className='text-center my-5'>ToDo's List</h3>
        { todolist.length===0 ? "No todo list" :
          todolist.map( (todo)=> {
            return  (
              <>
              <ToDoItems todos={todo}  key={todo.s_no} Delete={onDelete}/> <hr/>
              </>
            )
          })
        }
    </div>
  )
}


export default ToDos
