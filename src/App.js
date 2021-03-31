import { useState } from 'react';
import './App.css';

// components
import Header from './components/Header';
import TaskList from './components/Tasks';
function App() {
  const [tasks, setTasks] = useState([
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
  ]);

  // Delete Task
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  return (
    <div className='container'>
      <Header />
      {tasks.length !== 0 ? (
        <TaskList tasks={tasks} onDelete={deleteTask} />
      ) : (
        <p>Nothing is here</p>
      )}
    </div>
  );
}

export default App;
