import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, deleteTask } from './api';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            const fetchedTasks = await fetchTasks();
            setTasks(fetchedTasks);
        };
        loadTasks();
    }, []);

    const handleAddTask = async (task) => {
        const newTask = await createTask(task);
        setTasks([...tasks, newTask]);
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter(task => task._id !== id));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm onAdd={handleAddTask} />
            <TaskList tasks={tasks} onDelete={handleDeleteTask} />
        </div>
    );
};

export default App;