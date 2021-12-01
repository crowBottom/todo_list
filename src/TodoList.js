import React, { useState } from 'react';
import {v4 as uuid} from "uuid";
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
  const INITIAL_STATE = [
    {id: uuid(), task: 'Make a todolist'},
  ]
  const [tasks, setTasks] = useState(INITIAL_STATE)
  const addTask = (newTask) => {
    setTasks(tasks => [...tasks, {...newTask, id: uuid()}])
  }
  const handleRemove = (id) => {
   const newList = tasks.filter((item) => item.id !== id);
   setTasks(newList)
  }

  return (
    <div>
      <h3>Todos</h3>
      <NewTodoForm addTask={addTask} />
      <div>
        {tasks.map(({id, task}) =>
          <div className="w3-margin w3-padding">
            <Todo id={id} task={task} />
            <div className="w3-btn w3-ripple w3-border w3-round w3-text-red w3-tiny" onClick={() => handleRemove(id)}>del</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoList;
