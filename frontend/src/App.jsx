import { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err));
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: input })
    })
      .then(res => res.json())
      .then(newTask => {
        setTasks([...tasks, newTask]);
        setInput('');
      });
  };

  return (
    <div className="app-container">
      <h1>Task Dashboard</h1>
      <form onSubmit={addTask} style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
        <input 
          placeholder="Add a new task..." 
          value={input} 
          onChange={e => setInput(e.target.value)} 
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <span>{task.title}</span>
            <span style={{ color: task.completed ? 'green' : 'orange' }}>
              {task.completed ? '✓' : '⧖'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}