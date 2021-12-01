import React, { useState } from 'react';

const NewTodoForm = ({addTask}) => {
  const INITIAL_STATE = {
    task: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    addTask({ ...formData });
    setFormData(INITIAL_STATE);
  }

  return (
    <div className="w3-card-4 w3-padding">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="" htmlFor="task">Todo</label>
        </div>
        <div>
          <input
            id="task"
            type="text"
            name="task"
            placeholder="Add something todo..."
            value={formData.task}
            onChange={handleChange}
          />
        </div>

        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm;
