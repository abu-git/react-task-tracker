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

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
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
