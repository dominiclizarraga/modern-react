// import React from 'react' THIS IS NOT NEEDED THIS TIME
import '../App.css';
import PropTypes from "prop-types";

function Footer(props) {
    const styles = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <>
            <div className="footer" style={styles}>
                <h3>Footer!</h3>
                <h3>{ props.dynamicText }</h3>
            </div>
        </>
    );
}


Footer.propTypes = {
    dynamicText: PropTypes.string
}

export default Footer;