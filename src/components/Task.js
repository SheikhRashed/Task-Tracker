import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task }) => {
  return (
    <div className='task'>
      {/* <span
        className='bold'
        style={{
          fontWeight: 'bold',
          backgroundColor: 'brown',
          color: '#fff',
          padding: '5px 15px',
          display: 'inline-block',
          marginBottom: '15px',
        }}
      >
        {task.id}
      </span> */}
      <h3>
        {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
