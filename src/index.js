import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import { useState, useEffect } from 'react'
import './index.css';

const Index = () => { //Top level app or index function
    useEffect(()=> { //Do this when the page loads
        const getTasks = async() => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [] )
    
    // Fetch data
    const fetchTasks = async () => {
        const res = await fetch ('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }

    // Fetch data
    const fetchTask = async (id) => {
        const res = await fetch (`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
    }

    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([]) 
    // Add Task
    const addTask = async(task) => {
        // const id = Math.floor(Math.random()*1000+1)
        // const newTask = { id, ...task }
        // setTasks([...tasks, newTask])
        const res = await fetch(`http://localhost:5000/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const data = await res.json()
        setTasks([...tasks, data])
    }
    // Delete Task
    const deleteTask = async (id) => {
        // Delete from Database
        await fetch(`http://localhost:5000/tasks/${id}`,
        {
            method: 'DELETE',
        })
        

        setTasks(tasks.filter((task) => task.id !== id ))
        console.log('Delete', id)
    }    
    const toggleReminder = async(id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
        
        const res = await fetch (`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(updTask)            
        })
        const data = await res.json()

        setTasks
        (
            tasks.map((task) => 
                task.id === id ? {...task, reminder: data.reminder} : task
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
        <Router>
            <div className="container">
                <Header title={'Bart 2.0 - the Creation'} 
                    onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask} />
                    
                <Route path='/' exact render={(props) => (
                    <>
                    {showAddTask && <AddTask onAdd={addTask} />}
                    {tasks.length > 0 ? 
                    <Tasks tasks={tasks} onDelete=
                    {deleteTask} onToggle={toggleReminder} onPostpone={postponeTask} /> : 'no tasks available'}
                    </>
                )} />
                <Route path='/about' component={About}></Route>
                <Footer />
            </div>
        </Router>
    )
}

// ========================================

ReactDOM.render(
<Index />,
document.getElementById('root')
);
