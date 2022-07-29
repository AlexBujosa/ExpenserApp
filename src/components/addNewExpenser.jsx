import React, { Fragment, useState } from 'react';
import { ButtonAddNewExpenser } from './addNewExpenserComponents/buttonToAddExpenser';
import { FormToAddExpenser } from './addNewExpenserComponents/formToAddExpenser';
import "../assets/css/addExpenser.css";

export function AddNewExpenser(props){
    const [expenserState, setExpenserState] = useState(true);
    const OpenForm = () =>{
        var addNew = document.getElementById('AddNewButton');
        addNew.style="Height:200px;";
        setExpenserState((oldExpenserState) =>{
            return !oldExpenserState;
        })
    }
    const OnClose = ()=>{
        var addNew = document.getElementById('AddNewButton');
        addNew.style="height:fit-content;";
        setExpenserState((oldExpenserState) =>{
            return !oldExpenserState;
        })
    }
  
    return(
        <Fragment>
             <div className="AddNewButton" id="AddNewButton">
                {expenserState && <ButtonAddNewExpenser value="Add New Expense" onClick={()=>OpenForm()}/>}
                {!expenserState && <FormToAddExpenser onClose={()=>OnClose()} onSubmit={props.onSubmit}/>}
            </div>
        </Fragment>
       
    )
}