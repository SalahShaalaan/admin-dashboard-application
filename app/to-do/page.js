'use client';
import { useState } from 'react';
import Task from './Task';

export default function Page() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Meeting with CEO', isComplete: false, isImportant: false },
    { id: 2, text: 'Pick up kids from school', isComplete: false, isImportant: false },
    { id: 3, text: 'Shopping with Brother', isComplete: false, isImportant: false },
    { id: 4, text: 'Review with HR', isComplete: false, isImportant: false },
    { id: 5, text: 'Going to Dia\'s School', isComplete: false, isImportant: false },
    { id: 6, text: 'Check design files', isComplete: false, isImportant: false },
    { id: 7, text: 'Update File', isComplete: false, isImportant: false },
  ]);

  const [newTask, setNewTask] = useState('');
  const [isAddingTask, setIsAddingTask] = useState(false);

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isComplete: !task.isComplete } : task));
  };

  const toggleImportant = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isImportant: !task.isImportant } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = () => {
    if (newTask.trim() === '') {
      setIsAddingTask(false);
      setNewTask('');
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: newTask, isComplete: false, isImportant: false }]);
    setNewTask('');
    setIsAddingTask(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="p-4 bg-bgColor dark:bg-darkBg transition-colors duration-100 flex flex-col">
      <div className="text-black dark:text-darkText flex justify-between items-center">
        <h1 className="text-3xl font-bold">{isAddingTask ? 'Add New Task' : 'To-Do List'}</h1>
        <button
          onClick={() => {
            setIsAddingTask(!isAddingTask);
            if (!isAddingTask) setNewTask('');
          }}
          className={`bg-blue text-white px-4 py-2 rounded transition ${isAddingTask ? 'hidden' : 'flex'}`}
        >
          Add New Task
        </button>
        {isAddingTask && (
          <button
            onClick={addTask}
            className="bg-blue text-white px-4 py-2 rounded flex"
          >
            Save
          </button>
        )}
      </div>

      {isAddingTask && (
        <div className="bg-bgColor my-4 dark:bg-SecDarkBg">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter new task"
            className="p-4 rounded-lg border w-full outline-none dark:bg-SecDarkBg dark:border-none"
          />
        </div>
      )}

      <div className="flex-1 overflow-y-auto mt-6 space-y-4">
        {tasks.map(task => (
          <Task key={task.id} task={task} toggleComplete={toggleComplete} toggleImportant={toggleImportant} deleteTask={deleteTask} />
        ))}
      </div>
      <p>{!tasks && 'No tasks'}</p>

    </div>
  );
}