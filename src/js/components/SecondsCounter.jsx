import React from "react";
import PropTypes from "prop-types";
import { FaClock } from "react-icons/fa"; // Importamos el icono de reloj

function SecondsCounter(props){
    const digits = props.seconds.toString().padStart(6, "0").split("");
    return(
        <div className="counter-container">
            <div className="digit-box">
                <FaClock className="clock-icon" />
            </div>
            {digits.map((digit, index) =>(
                <div key = {index} className="digit-box">
                    {digit}
                </div>

            ))}
        </div>
    )
}
SecondsCounter.propTypes = {
    seconds : PropTypes.number.isRequired
};
export default SecondsCounter;