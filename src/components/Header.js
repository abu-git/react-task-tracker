import PropTypes from 'prop-types';
import Button from './Button';

/* CSS in JS
const Header = ({ title }) => {
    return (
        <header>
            <h1 style={headingStyle}>{title}</h1>
        </header>
    )
}*/

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTyes = {
    title: PropTypes.string.isRequired,
}

/*Styling for CSS in JS
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}*/

export default Header;
