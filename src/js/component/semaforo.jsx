import React, { useState } from "react";

const Semaforo = () => {
    const [color, setColor] = useState("rojo");
    return (
        <div className="farola">
            <div className={`luz rojo ${color === "rojo" ? "active" : ""}`} onClick = { () => setColor("rojo")}></div>
            <div className={`luz amarillo ${color === "amarillo" ? "active" : ""}`} onClick = { () => setColor("amarillo")}></div>
            <div className={`luz verde ${color === "verde" ? "active" : ""}`} onClick = { () => setColor("verde")}></div>
        </div>
    );
};

export default Semaforo;