import React, {useState} from 'react';
import "../../assets/css/addExpenser.css"
export function FormToAddExpenser(props){
    const [fTitle, SetfTitle] = useState("");
    var date = new Date();
    const[fDate, SetfDate] = useState(date.toLocaleDateString('en-CA'));
    const[fAmount, SetfAmount] = useState(100);
    return(
        <form onSubmit={props.onSubmit}>
            <div className="upper-side">
                <div className="left-side">
                    <label>Tittle</label><br/>
                    <input type="text" id="fTitle" name="fTitle" className="fTitle" value={fTitle} onChange={e => SetfTitle(e.target.value)} placeholder="Add Tittle"/><br/>
                    <label>Date</label><br/>
                    <input type="date" id="fDate" name="fDate" className="fDate" value={fDate} onChange={e => SetfDate(e.target.value)}/>
                </div>
                <div className="right-side">
                    <label>Amount</label><br/>
                    <input type="number" id="fAmount" name="fAmount" className="fAmount" step="0.01" value={fAmount || 0}  onChange={e => SetfAmount(e.target.value)}/>
                </div>
            </div>
            <div className="bottom-side">
                <input type="cancel" value="Cancel" className="cancel" onClick={props.onClose}/>
                <input type="submit" value="Add Expense" className="submit"/>
            </div>
        </form>
    )
}