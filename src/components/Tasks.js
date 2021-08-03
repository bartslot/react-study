import Task from './Task';
const Tasks = ({tasks, onDelete, onToggle, onPostpone}) => {
    
    return (
        <div>
            {tasks.map((task) => (
            <Task key={task.id} task={task} 
            onDelete={onDelete} 
            onToggle={onToggle}
            onPostpone={onPostpone} 
            />
            ))}
        </div>
    )
}

export default Tasks
