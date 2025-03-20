import React from "react";
import PropTypes from "prop-types";

function secondsCounter(props){
    const digits = props.seconds.toString().padStart(6, "0").split(" ");
    return(
        <div className="">
            <div className="icon">

            </div>
            {digits.map((digit, index) =>(
                <div key = {index} className="">
                </div>

            ))}
        </div>
    )
}
secondsCounter.propTypes = {
    seconds : PropTypes.number.isRequired
};
export default SecondsCounter;