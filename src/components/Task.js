import { FaTimes, FaClock } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle, onPostpone}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''} ${task.postpone ? 'postpone' : ''} `} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} 
            <div className="controls">
                <FaClock onClick={() => onPostpone(task.id)} className='postponeIcon' />
                <FaTimes onClick={() => onDelete(task.id)} style={{color:'red', cursor:'pointer'}} />
                </div>
            </h3>
                
                <p>{task.day}</p>
            
        </div>
    )
}

export default Task
