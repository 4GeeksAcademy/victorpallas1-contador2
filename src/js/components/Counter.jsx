import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";

const Counter = () => {
    const [seconds, setSeconds] = useState(0);
    const startTime = performance.now(); // Guarda el tiempo de inicio

    useEffect(() => {
        const interval = setInterval(() => {
            const elapsedTime = Math.floor((performance.now() - startTime) / 1000); // Convierte a segundos
            setSeconds(elapsedTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []); // Solo ejecuta al montar

    return (
        <div className="text-center">
            <h1 className="text-center">Contador:</h1>
            <div className="d-flex justify-content-center align-items-center">
                <SecondsCounter seconds={seconds} />
            </div>
        </div>
    );
};

export default Counter;