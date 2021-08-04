import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'
import './index.css';

const Index = () => {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: '20 push ups',
                day: '29 july 14:30',
                reminder: true,
                postpone: true,
            },
            {
                id: 2,
                text: '19 push ups',
                day: '3 aug juli at 14:30',
                reminder: true,
                postpone: false,
            },
            {
                id: 3,
                text: '3 uur react tutorial volgen',
                day: '29 july at 15:00',
                reminder: false,
                postpone: false,
            },
            {
                id: 4,
                text: '3 uur portfolio materiaal verzamelen',
                day: '29 july at 16:30',
                reminder: false,
                postpone: false,
            },
            {
                id: 5,
                text: 'Body lotion halen, deo, tandpasta, douchegel en shampoo',
                day: '29 july at 17:30',
                reminder: false,
                postpone: false,
            },
        ]
    ) 
    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random()*1000+1)
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }
    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id ))
        console.log('Delete', id)
    }    
    const toggleReminder = (id) => {
        setTasks
        (
            tasks.map((task) => 
                task.id === id ? {...task, reminder: !task.reminder} : task
            )
        )
    }
    const postponeTask = (id) => {
        setTasks
        (
            tasks.map((task) => 
                task.id === id ? {...task, postpone: !task.postpone} : task
            )
        )
    }

    return (
        <div className="container">
            <Header title={'Bart 2.0 - the Creation'} 
                onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask} />
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? 
                <Tasks tasks={tasks} onDelete=
                {deleteTask} onToggle={toggleReminder} onPostpone={postponeTask} /> : 'no tasks available'}
        </div>
    )
    
}

// ========================================

ReactDOM.render(
<Index />,
document.getElementById('root')
);
