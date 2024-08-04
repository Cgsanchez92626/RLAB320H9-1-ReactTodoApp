import React from "react";

function Stats({ todos }) {
  // Calculate statistics
  const categories = [
    "Career",
    "Family",
    "Financial",
    "Mind",
    "Physical",
    "Social",
    "Spiritual",
  ];

  // Compute category-wise statistics
  // Calculate total todos and completed todos
  const totalTodos = todos.length;
  const totalCompleted = todos.filter((todo) => todo.completed).length;

  // Compute statistics by category
  const categoryStats = categories.reduce((acc, category) => {
    const todosByCategory = todos.filter((todo) => todo.value === category);
    const completed = todosByCategory.filter((todo) => todo.completed).length;
    const uncompleted = todosByCategory.filter((todo) => !todo.completed).length;
    const totalByCategory = completed + uncompleted;

    // Percentage of total todos for this category
    const pctOfTotal = totalTodos > 0 ? ((totalByCategory / totalTodos) * 100) : 0;

    acc[category] = {
      completed,
      uncompleted,
      pctOfTotal,
    };
    return acc;
  }, {});

  // Calculate overall percentage contribution
  // const overallPercentage = categories.reduce((acc, category) => {
  //   return acc + parseFloat(categoryStats[category].pctOfTotal || 0);
  // }, 0);

    // Adjust the overall percentage to exactly 100%
    const adjustedTotalPercentage = totalTodos > 0 ? 100 : 0; // Total should be 100% if there are todos

    return (
      <footer className="stats">
        <h3>How you spend your time, tells you what is important to you!!</h3>
        <h3>Todo Statistics by Category</h3>
        <table>
          <thead>
            <tr>
              <th>Value Area</th>
              <th>Uncompleted Todos</th>
              <th>Completed Todos</th>
              <th>% Of Total</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category}>
                <td>{category}</td>
                <td>{categoryStats[category].uncompleted}</td>
                <td>{categoryStats[category].completed}</td>
                <td>{categoryStats[category].pctOfTotal.toFixed(2)}%</td>
              </tr>
            ))}
            <tr>
              <td><strong>Total</strong></td>
              <td>{totalTodos - totalCompleted}</td>
              <td>{totalCompleted}</td>
              <td>{adjustedTotalPercentage.toFixed(2)}%</td>
            </tr>
          </tbody>
        </table>
      </footer>
  );
}

export default Stats;
