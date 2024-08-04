import React, { useReducer } from "react";
// import './App.css'; // Add your custom styles here if needed
import Logo from "./components/Logo";
import Form from "./components/Form";
import PriorityList from "./components/PriorityList";
import Stats from "./components/Stats";

const initialTodos = [
  {
    id: 1,
    description: "Research Job Oppurtunities",
    value: "Financial",
    completed: false,
  },
  { id: 2, description: "Complete Per Scholas", value: "Mind", completed: false },
  { id: 3, description: "Attend Group Gathering", value: "Social", completed: true },
  { id: 4, description: "Apply For A Job", value: "Career", completed: true },
  { id: 5, description: "Work Out", value: "Physical", completed: true },
  { id: 6, description: "Maintain AirBNB", value: "Financial", completed: false },
  { id: 7, description: "Movie Night", value: "Social", completed: true },
  { id: 8, description: "Clean/Declutter", value: "Family", completed: false },
  { id: 9, description: "Meditate", value: "Spiritual", completed: false },
];

function reducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [action.payload, ...todos];
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "SAVE_TODO":
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              description: action.payload.description,
              value: action.payload.value,
            }
          : todo
      );
    default:
      return todos;
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  function handleAddTodo(todo) {
    dispatch({ type: "ADD_TODO", payload: todo });
  }

  function handleDeleteTodo(id) {
    dispatch({ type: "DELETE_TODO", payload: id });
  }

  function handleToggleComplete(id) {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }
  function handleSaveTodo(id, description, value) {
    dispatch({ type: "SAVE_TODO", payload: { id, description, value } });
  }

  return (
    <div className="app">
      <Logo />
      <div className="body">
        <Form onAddTodo={handleAddTodo} />
        <PriorityList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleComplete}
          onSaveTodo={handleSaveTodo}
        />
      </div>
      <Stats todos={todos} />
    </div>
  );
}

export default App;
