import React from 'react';
import "../../assets/css/expenserTracker.css"
export function FilterYearTitle({value, selected, onChange}){
    return(
        <div className="FilterTitle">
            <p className="FilterByYear">Filter by Year</p>
            <div className="div-select" >
                <select className="customer-select" name="selected" selected ={selected} onChange={onChange}>
                    {value.map((item)=>(
                        <option value={item} className="op" key={item}>{item}</option>
                    )
                    )}
                </select>
            </div>
        </div> 
    )
}