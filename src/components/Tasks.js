import React from 'react';
// component
import Task from './Task';
function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <>
      {/* {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))} */}

      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default Tasks;
