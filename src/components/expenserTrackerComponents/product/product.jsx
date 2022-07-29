import React from 'react';
import "../../../assets/css/expenserTracker.css";
export function ExpenserProduct({value, year, month, day, title, expense}){
    return(
        
        <div className="item-product" key={value}>
            <div className="date">
                <p className="month">{month}</p>
                <p className="year">{year}</p>
                <p className="day">{day}</p>
            </div>
            <p className="name-product">{title}</p>
            <p className="price-in">$ {expense}</p>
        </div>
    )
}