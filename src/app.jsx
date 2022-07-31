import React, {useState} from 'react';
import { AddNewExpenser } from './components/addNewExpenser';
import { ExpenserTracker } from './components/expenserTracker';

function rtnYears(dateStr, years){
    var oldYear = [...years];
    var decodeDate = new Date(dateStr);
    var year = decodeDate.getFullYear();
    if(oldYear.includes(year)) return years;
    oldYear.push(year);
    return oldYear.sort().reverse();
}

export function App(){
    const[productStorage, SetProductStorage] = useState([
        {Title: "New TV", Date: "2021-03-12", Expense: 799.49},
        {Title: "Car Insurance", Date: "2021-03-28", Expense: 294.67},
        {Title: "New Desk (Wooden)", Date: "2021-06-12", Expense: 450},
        {Title: "Toilet Paper", Date: "2020-08-14", Expense: 94.12},
        {Title: "Iphone X", Date:"2019-02-13", Expense: 200.15}
    ]);
    const[filterByYear, SetFilterByYear] = useState([2022, 2021, 2020,2019, 2017])
    const OnSubmit = (event)=>{
        event.preventDefault();
        var title = event.target.fTitle.value;
        var date = event.target.fDate.value;
        var expense = event.target.fAmount.value;
        var newProduct = {Title:title, Date: date, Expense: expense}
        SetProductStorage((oldProduct)=>{
            return [...oldProduct, newProduct]
        })
        
        SetFilterByYear((oldYear)=>{
            return rtnYears(date, oldYear);
        })
    }
    return(
        <div>
            <AddNewExpenser onSubmit={(event)=>OnSubmit(event)}/>
            <ExpenserTracker value ={productStorage} filterByYear = {filterByYear}/>
        </div>
    )
}