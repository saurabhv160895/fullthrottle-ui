import React, { Component } from "react";
import "./App.css";
import Header from "../../components/Header/Header";
import Employee from "../Employee/Employee";

class App extends Component {
	state = {
		employees: [],
	};

	componentDidMount() {
		fetch("http://localhost:4000/members/")
			.then((res) => res.json())
			.then((res) => {
				const employees = res.map((el, index) => {
					return el;
				});
				//console.log(employees);
				this.setState({
					employees: employees,
				});
			});
	}

	renderEmployees = () => {
		const employees = this.state.employees.map((el, index) => (
			<div key={index}>
				<Employee employee={el} />
			</div>
		));
		return <div className="employeeList">{employees}</div>;
	};

	render() {
		return (
			<div className="App">
				<Header />
				{this.renderEmployees()}
			</div>
		);
	}
}

export default App;
