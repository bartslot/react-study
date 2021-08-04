import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1 style={headerStyle}>{title}</h1>
            <Button 
                onClick={onAdd} 
                text={showAdd ? 'Close' : 'Add'}
                color={showAdd ? 'darkred' : 'steelblue'}
            />
            
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
