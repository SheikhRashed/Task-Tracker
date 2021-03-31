import './App.css';

// components
import Header from './components/Header';
import TaskList from './components/Tasks';
function App() {
  return (
    <div className='container'>
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
