import React from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './EmployeeDetails.css';

const EmployeeDetails = (props) =>{

    let message=<div><span style={{fontWeight:"bold"}}>No data available for this date</span></div>
    if(props.isActive.length){
       message = props.isActive.map((el,index)=>{
       return <div key={index}><p><span style={{fontWeight:"bold"}}>Start time :</span> {el.start_time}  <span style={{fontWeight:"bold"}}>End time :</span> {el.end_time}</p></div>
       })
    }

    return (
        <div className="employeeDetails">
            <Calendar onChange={props.onChange} value={props.date}/>
            <div  className="message">
            <p><span style={{fontWeight:"bold"}}>Date :</span> {props.dateStr} </p>
            {message}
            </div> 
        </div>
    );
}

export default EmployeeDetails;