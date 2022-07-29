import React from 'react';
import { ExpenserProduct } from './product/product';
import {v4 as uuid} from 'uuid';
function generateNewUnique(){
    var unique_id = uuid();
    var small_id = unique_id.slice(0,8);
    return small_id;
}


function rtnYearArrExpense(expenseArr, filterByYear){
    const Month = ["January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "November", "December"];
    var newExpenseArr = [...expenseArr];
    var arrYearExpense = [];
    for(let i = 0; i<newExpenseArr.length; i++){
        var date = new Date(newExpenseArr[i].Date);
        var year =date.getFullYear();
        var month = date.getMonth();
        var day = date.getDay();
        var monthStr = Month[month];
        if(filterByYear === year){
            arrYearExpense.push({Year: year, Month: monthStr, Day: day, Title:newExpenseArr[i].Title, Expense: newExpenseArr[i].Expense})
        }
    }
    return arrYearExpense;
}
export function FilterBody({value, filterByYear}){
    var arrYearExpense = rtnYearArrExpense(value, filterByYear);
    return(
        <div className="Filter-Body">
            {arrYearExpense.map((item)=>(
                <ExpenserProduct value={item.Month+ ""+ item.Expense+""+generateNewUnique()}year={item.Year} month = {item.Month} day ={item.Day} title ={item.Title} expense={item.Expense}/>
            ))}
        </div>
    )
}