import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    
    return (
        <header className='header'>
            <h1 style={headerStyle}>{title}</h1>
            {location.pathname === '/' && (<Button 
                onClick={onAdd} 
                text={showAdd ? 'Close' : 'Add'}
                color={showAdd ? 'darkred' : 'steelblue'}
            />)}
            
        </header>
         
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
Header.defaultProps = {
    title: 'Task Tracker',
}

const headerStyle = {
    color: 'darkGrey',
    backgroundColor: 'yellow',
}

export default Header
