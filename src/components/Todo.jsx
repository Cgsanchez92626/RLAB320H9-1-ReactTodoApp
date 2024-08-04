import React, { useState } from "react";

function Todo({ todo, onDeleteTodo, onToggleTodo, onSaveTodo }) {
  const [editing, setEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [editValue, setEditValue] = useState(todo.value);

  function handleDeleteTodo() {
    onDeleteTodo(todo.id);
  }

  function handleToggleComplete() {
    onToggleTodo(todo.id);
  }

  function handleEditClick() {
    setEditing(true);
  }

  function handleSaveClick() {
    onSaveTodo(todo.id, editDescription, editValue,);
    setEditing(false);
  }

  function handleDescriptionChange(e) {
    setEditDescription(e.target.value);
  }

  function handleValueChange(e) {
    setEditValue(e.target.value);
  }

  return (
    <li className="todo">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
      />
      {editing ? (
        <>
          <select value={editValue} onChange={handleValueChange}>
            <option value="Career">Career</option>
            <option value="Family">Family</option>
            <option value="Financial">Financial</option>
            <option value="Mind">Mind</option>
            <option value="Physical">Physical</option>
            <option value="Social">Social</option>
            <option value="Spiritual">Spiritual</option>
          </select>
          <input
            type="text"
            value={editDescription}
            onChange={handleDescriptionChange}
            placeholder="Edit description"
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <div>
          <span
            style={todo.completed ? { textDecoration: "line-through" } : {}}
          >
            {todo.value} - {todo.description}
          </span>
          <button onClick={handleEditClick} disabled={todo.completed}>
            Edit
          </button>
          <button onClick={handleDeleteTodo} disabled={!todo.completed}>
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default Todo;
