import React from "react";
 export default function EvalExpress(){
    let x =220.67;
    let y=30;

    return(
        <div>
            <h1>
                EVALUATE EXPRESSION
            </h1>
            <h3>
                {x}{">"}{y}{" "}{ x>y ? "TRUE": 'FALSE'}
            </h3>
        </div>
    );
 }