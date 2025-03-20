import React from "react";
import PropTypes from "prop-types";

function SecondsCounter(props){
    const digits = props.seconds.toString().padStart(6, "0").split(" ");
    return(
        <div className="">
            <div className="">
            </div>
            {digits.map((digit, index) =>(
                <div key = {index} className="text-center">
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