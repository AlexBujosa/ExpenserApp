import React from 'react';
import "../../assets/css/addExpenser.css";
export function ButtonAddNewExpenser(props){
    return(
        <button className="btn-expense" onClick={props.onClick} id="btn-expense">{props.value}</button>
    )
}