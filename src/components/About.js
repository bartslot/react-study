import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h3>Version 1.0</h3>
            <p>Task Manager app is made by Bart Slot</p>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About