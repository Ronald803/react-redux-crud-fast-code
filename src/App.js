import './App.css';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <TaskForm></TaskForm>
      <TasksList></TasksList>
    </div>
  );
}

export default App;
