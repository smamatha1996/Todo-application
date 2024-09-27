import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, addTodo, deleteTodo, toggleTodo } from '../features/todoslice';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem = {
        id: Date.now(), // Unique ID for each todo
        title: newTodo,
        completed: false,
      };
      dispatch(addTodo(newTodoItem)); // Dispatch to add the new todo
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id)); // Dispatch to toggle the completion status
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id)); // Dispatch to delete the todo
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center" >To-Do List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.title}
            </span>
            <button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
