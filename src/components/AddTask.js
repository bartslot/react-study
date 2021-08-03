import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    // Submit form checks
    const onSubmit = (e) => {
        e.preventDefault()
    
        if(!text) {
            alert('Please add a task')
            return
        }
        
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form action="" className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" 
                        onChange={(e)=> setText(e.target.value)} 
                        placeholder="Add Task"
                        value={text}        
                />
            </div>
            <div className="form-control">
                <label htmlFor="">Day &amp; Time</label>
                <input type="text" onChange={(e)=> setDay(e.target.value)} placeholder="Add Day & Time"
                value={day}
                />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" 
                    onChange={(e)=> setReminder(e.currentTarget.checked)}
                    placeholder="Set Reminder" 
                    value={reminder}
                    checked={ reminder }
                />
            </div>
            <input type="submit" value='Save Task' className='btn btn-block' />
            
        </form>
    )
}

export default AddTask
