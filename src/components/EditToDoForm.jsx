import React, { useState } from 'react';

const EditToDoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id); // Fixed `task,id` to `task.id`
    setValue('');
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value} // Fixed `valueue` typo
        placeholder="Update task?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditToDoForm;
