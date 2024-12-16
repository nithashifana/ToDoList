import React, { useState } from "react";

const ToDoForm = ({ addTodo }) => {
  const [value, setvalue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setvalue("");
  };
  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setvalue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;
