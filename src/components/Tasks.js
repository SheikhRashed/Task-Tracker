import React from 'react';

const tasks = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting with clients',
    day: 'Feb 30th at 5:00pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Interview at Lotus technology Development ',
    day: 'April 01 at 3:30pm',
    reminder: true,
  },
];

function Tasks() {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}

export default Tasks;
