import React, { Fragment } from 'react';
import { PorcentageMonth } from '../porcentage/porcentageMonth';
import "../../assets/css/expenserTracker.css";
var expenseTotal = 0;
var isTrue = true;
const month = [ "Jan", "Feb", "Mar",
                "Apr", "May", "Jun",
                "Jul", "Ago", "Sep",
                "Oct", "Nov", "Dec"];
                
function rtnMonthArrExpense(expenseArr, filterByYear){
    var newExpenseArr = [...expenseArr];
    var arrMonthExpense = [];
    var saveMonth = [];
    var saveIndex = [];
    var index = 0;
    expenseTotal = 0;
    for(let i = 0; i<newExpenseArr.length; i++){
        var date = new Date(newExpenseArr[i].Date);
        var year =date.getFullYear();
        var expense = parseInt(newExpenseArr[i].Expense);
        if(filterByYear === year){
            if(arrMonthExpense.length > 0){
                var indexMonth = saveMonth.indexOf(date.getMonth());
                if(indexMonth !== -1){
                    arrMonthExpense.at(indexMonth).Expense += expense;
                }else{
                    arrMonthExpense.push({Month: date.getMonth(), Expense: expense})
                    saveMonth.push(date.getMonth());
                    saveIndex.push(index);
                }
            }else{
                arrMonthExpense.push({Month: date.getMonth(), Expense: expense})
                saveMonth.push(date.getMonth());
                saveIndex.push(index);
            }
            index++;
            expenseTotal += expense;
        }
    }
    return arrMonthExpense;
}

function reset(){
    for(let i = 0; i< month.length;i++){
        var id = month[i];
        var element = document.getElementById(id);
        element.style="Height: 100%;"
    }
}

function changePorcentage(arrMonthExpense){
    reset();
    for(let i = 0;i<arrMonthExpense.length;i++){
        var id = month[arrMonthExpense[i].Month];
        var num = (arrMonthExpense[i].Expense / expenseTotal).toFixed(2) * 100;
        var element = document.getElementById(id);
        element.style="Height: "+ (100 - num).toString()+ "%;";
    }
}

export function FilterYearPorcentage({value, filterByYear}){
    expenseTotal = 0;
    var arrMonthExpense = rtnMonthArrExpense(value,filterByYear);
    const resetAll = () => {
        if(isTrue){
            isTrue = false;
        }
    }
    if(arrMonthExpense.length !== 0 && expenseTotal !== 0){
        changePorcentage(arrMonthExpense)
    }else if(!isTrue){
        reset();
    }
    
    return(
        <Fragment>
            <div className="Porcentage-Year">
                <div className="Porcentage-Month">
                    <PorcentageMonth value="Jan" id="Jan"/>
                    <PorcentageMonth value="Feb" id="Feb"/>
                    <PorcentageMonth value="Mar" id="Mar"/>
                    <PorcentageMonth value="Apr" id="Apr"/>
                    <PorcentageMonth value="May" id="May"/>
                    <PorcentageMonth value="Jun" id="Jun"/>
                    <PorcentageMonth value="Jul" id="Jul"/>
                    <PorcentageMonth value="Ago" id="Ago"/>
                    <PorcentageMonth value="Sep" id="Sep"/>
                    <PorcentageMonth value="Oct" id="Oct"/>
                    <PorcentageMonth value="Nov" id="Nov"/>
                    <PorcentageMonth value="Dec" id="Dec"/>
                </div>
               
                
        </div>
        {isTrue === true  && resetAll()}
        </Fragment>
        
    )
}