import React, {useState} from 'react'
import TodoList from './TodoList';

function TodoForm(props) {

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    setInput('');
  }

 
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  return (
    <div>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input value={input} placeholder = 'Add a todo' className='todo-input' onChange={handleChange} name='text' />
        <button className='todo-button'>Add a todo</button>
      </form>
    </div>
  )
}

export default TodoForm
