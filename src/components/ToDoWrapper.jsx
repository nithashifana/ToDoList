import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import EditToDoForm from './EditToDoForm';
import Todo from './ToDo'; 
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const edittask = (id, updatedTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get things done!</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditToDoForm
            key={index}
            editTodo={(updatedTask) => edittask(todo.id, updatedTask)}
            task={todo}
          />
        ) : (
          <Todo
            key={index}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default ToDoWrapper;
