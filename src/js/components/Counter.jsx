import React, {useState, useEffect} from "react";
import SecondsCounter from "./SecondsCounter";

const Counter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() =>{
            setSeconds(prevSeconds => prevSeconds + 1);

        }, 1000); 
        
        return() => clearInterval(interval);
    }, []);

    return(
        <div className="text-center">
            <h1 className="text-center">Contador: </h1>
            <p></p>
            <div>
                <h2><SecondsCounter seconds = {seconds}/></h2>
            </div>
        </div>
    )
}
export default Counter;