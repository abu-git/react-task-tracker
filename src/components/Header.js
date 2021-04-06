import PropTypes from 'prop-types';

/* CSS in JS
const Header = ({ title }) => {
    return (
        <header>
            <h1 style={headingStyle}>{title}</h1>
        </header>
    )
}*/

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='btn'>Add</button>
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
