import React, {useState} from 'react';
import { FilterYearTitle } from './expenserTrackerComponents/filterYearTitle';
import { FilterYearPorcentage } from './expenserTrackerComponents/filterYearPorcentage';
import { FilterBody } from './expenserTrackerComponents/filterBody';
import "../assets/css/expenserTracker.css"
export function ExpenserTracker(props){
    const[actualYear, SetactualYear] = useState(2022);
    const onChange = (e) =>{
        SetactualYear((oldYear)=>{
            oldYear =parseInt(String(e.target.value)) ;
            return oldYear;
        })

    }
    return (
        <div className="Body-FilterItem">
            <FilterYearTitle value={props.filterByYear} selected={actualYear} onChange={(e) => onChange(e)}/>
            <FilterYearPorcentage value={props.value} filterByYear={actualYear}/>
            <FilterBody value={props.value} filterByYear={actualYear}/>
        </div>
    )
}