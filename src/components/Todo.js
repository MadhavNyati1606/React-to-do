import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    text: ''
  })

  const submitUpdate = value =>{
    props.updateTodo(edit.id , value);
    setEdit({
      id:null,
      text:''
    })
  }
  if(edit.id){
    return <TodoForm edit = {edit} onSubmit = {submitUpdate}/>
  }
  
  return props.todos.map((todo , index)=>(// this bracket is used instead of {} because () represents JSX whereas {} represents Javascript
  
    <div className= {todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key = {todo.id} onClick = {()=> props.completeTodo(todo.id)} >
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine className='delete-icon' onClick= {()=>props.deleteTodo(todo.id)}/>
        <TiEdit className='edit-icon' onClick = {() =>setEdit({id:todo.id , value: todo.text})}/>
      </div>
    </div>
  )
)
  }
export default Todo
