import React from 'react';
import { ExpenserProduct } from './product/product';
import {v4 as uuid} from 'uuid';
function generateNewUnique(){
    var unique_id = uuid();
    var small_id = unique_id.slice(0,8);
    return small_id;
}

export function FilterBody({value, filterByYear}){
    const Month = ["January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "November", "December"];
    const filteredYear = value.filter(expense => {
        return new Date(expense.Date).getFullYear() === filterByYear;
    })
    return(
        <div className="Filter-Body">
            <div>
                {filteredYear.map((item)=>(
                     <ExpenserProduct value={item.Month+ ""+ item.Expense+""+generateNewUnique()}year={new Date(item.Date).getFullYear()} month = {Month[new Date(item.Date).getMonth()]} day ={new Date(item.Date).getDate()+ 1} title ={item.Title} expense={item.Expense}/>
                ))}
            </div>
        </div>
    )
}