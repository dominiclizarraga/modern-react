// import React from 'react' THIS IS NOT NEEDED THIS TIME
import '../App.css';
import PropTypes from "prop-types";

function Footer(props) {
    const styles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    return (
        <>
            <div className="footer" style={styles}>
                <h3>Footer!</h3>
                <div style={styles}>
                    <h3>{ props.dynamicText  }</h3>
                    <p className="yearStyle">{ props.year }</p>
                </div>
            </div>
        </>
    );
}


Footer.propTypes = {
    dynamicText: PropTypes.string,
    year: PropTypes.number
}

export default Footer;