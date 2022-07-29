import React from 'react';
import "../../assets/css/progress.css"
export function PorcentageMonth(props){
    return(
        <div className="progress" key={props.value}>
            <div className="progressing" id={props.id}></div>
            <p>{props.value}</p>
        </div>
        
    )
}