import React from "react";
import Todo from "./Todo";

function PriorityList({ todos, onDeleteTodo, onToggleTodo, onSaveTodo }) {
  // console.log(initialTodos)
 
  return (
    <div className="list">
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
            onSaveTodo={onSaveTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default PriorityList;
