import React,{Component} from 'react';
import EmployeeDetails from '../../components/EmployeeDetails/EmployeeDetails';
import Aux from '../../hoc/Auxiliary';
import './Employee.css';
import Modal from 'react-modal';
import { createObj } from '../../utils/utils';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root');

class Employee extends Component {
    state={
        modalOpen:false,
        date:new Date(),
        activityPeriods:[]
    }

     /*createObj=(el)=>{
      let start = el.start_time.split(" ");
      start=start.filter(el=>{
          return el!=="";
      });

      let end = el.end_time.split(" ");
      const obj={
          month:start[0],
          date:start[1],
          year:start[2],
          start_time:start[3],
          end_time:end[3]
      }
      return obj;
  }*/

      employeeClickHandler = () =>{
       
        const activityPeriods = this.props.employee.activity_periods.map(el=>{
          const obj=createObj(el);
          return obj;
        });

        this.setState({
          modalOpen:true,
          activityPeriods:activityPeriods
        })


      }

      closeModalHandler = ()=> {
        this.setState({
          modalOpen:false,
          activityPeriods:[]
        });
      }

      onChange=(date)=>{
          this.setState({
            date:date,
          })
      }

    render(){
      
      let isActive =null;
      let dateStr=null;

      if(this.state.modalOpen){
          console.log("modal open");
          const selectedDate=this.state.date.getDate().toString();
          const selectedMonth=this.state.date.toLocaleString('default', { month: 'short' });
          const selectedYear = this.state.date.getFullYear().toString();
  
          isActive = this.state.activityPeriods.filter(el=>{
            return el.month===selectedMonth && el.date===selectedDate && el.year===selectedYear;
          })
          dateStr=`${selectedDate} ${selectedMonth} ${selectedYear}`;
      }
      
        
        return (
            <Aux>
                <div className="Employee" onClick = {this.employeeClickHandler}>
                    <p className="name">{this.props.employee.real_name}</p>
                    <p>{this.props.employee.id}</p>
                </div>
                
                {this.state.modalOpen && 
                <Modal
                  isOpen={this.state.modalOpen} 
                  shouldCloseOnOverlayClick={true} 
                  onRequestClose={this.closeModalHandler}
                  style={customStyles} >

                    <span className="close" style={{cursor:"pointer"}} onClick={this.closeModalHandler}><i className="far fa-times-circle"></i></span>
                    
                    <EmployeeDetails 
                    date={this.state.date}
                    dateStr={dateStr}
                    isActive={isActive}
                    onChange={this.onChange} 
                    employee={this.props.employee}/>
                </Modal>}
                
                
            </Aux>
            
         );
    }
    
}

export default Employee;