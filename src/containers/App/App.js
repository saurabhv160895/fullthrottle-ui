import React, { Component } from "react";
import "./App.css";
import Header from "../../components/Header/Header";
import User from "../User/User";

class App extends Component {
	state = {
		users: [],
	};

	componentDidMount() {
		fetch("http://localhost:4000/members/")
			.then((res) => res.json())
			.then((res) => {
				const users = res.map((el, index) => {
					return el;
				});
				//console.log(users);
				this.setState({
					users: users,
				});
			});
	}

	renderUsers = () => {
		const users = this.state.users.map((el, index) => (
			<div key={index}>
				<User user={el} />
			</div>
		));
		return <div className="userList">{users}</div>;
	};

	render() {
		return (
			<div className="App">
				<Header />
				{this.renderUsers()}
			</div>
		);
	}
}

export default App;
