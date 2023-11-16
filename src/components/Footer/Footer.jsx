import { useState } from 'react';
import './styles.css';

const Footer = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSaveTask = () => {
    if (task.trim() !== '') {
      // Adiciona a nova tarefa ao array de tarefas
      setTasks([...tasks, task]);
      // Limpa o campo de input
      setTask('');
    }
  };

  return (
    <footer className="footer">
      <div className="task-input">
        <input type="text" placeholder="Digite sua tarefa" value={task} onChange={handleInputChange} />
        <button onClick={handleSaveTask}>Adicionar</button>
      </div>
    </footer>
  );
};

export default Footer;