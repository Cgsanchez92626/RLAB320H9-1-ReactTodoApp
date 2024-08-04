import React from "react";
import { useState } from "react";

function Form({onAddTodo}) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      description,
      value,
      completed: false,
      id: Date.now(),
    };

    onAddTodo(newTodo)
    setDescription("")
    setValue("")
    // console.log(e.target);
  }

  function handleValueChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function handleChange(e) {
    //   console.log(event.target)
    setDescription(e.target.value);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>
        What can you do today, that aligns with your 🥅 Values? 
      </h3>
      <h3>
       Remember to Delegate!!
      </h3>
      
      <select
        value={value}
        onChange={handleValueChange}
        required
      >
        <option value="" disabled>Select a value</option>
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
        value={description}
        name=""
        onChange={handleChange}
        placeholder="Add a new todo"
      ></input>
      <button disabled={!description}>Add Todo</button>
    </form>
  );
}

export default Form;
