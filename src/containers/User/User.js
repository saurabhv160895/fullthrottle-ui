import React, { Component } from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import Aux from "../../hoc/Auxiliary";
import "./User.css";
import Modal from "react-modal";
import {
	createActvityPeriodObj,
	checkIsActive,
	getFormattedDate,
} from "../../utils/utils";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};
Modal.setAppElement("#root");

class User extends Component {
	state = {
		modalOpen: false,
		date: new Date(),
		activityPeriods: [],
	};

	userClickHandler = () => {
		const activityPeriods = this.props.user.activity_periods.map((el) => {
			const obj = createActvityPeriodObj(el); //Extracting activity data from json file and converting it to an object
			return obj;
		});

		this.setState({
			modalOpen: true,
			activityPeriods: activityPeriods,
		});
	};

	closeModalHandler = () => {
		this.setState({
			modalOpen: false,
			activityPeriods: [],
		});
	};

	onChange = (date) => {
		this.setState({
			date: date,
		});
	};

	render() {
		let isActive = null;
		let dateStr = null;

		if (this.state.modalOpen) {
			//console.log("modal open");
			isActive = checkIsActive(this.state.date, this.state.activityPeriods);
			dateStr = getFormattedDate(this.state.date);
			console.log(isActive);
		}

		return (
			<Aux>
				<div className="User" onClick={this.userClickHandler}>
					<p className="name">{this.props.user.real_name}</p>
					<p>{this.props.user.id}</p>
				</div>

				{this.state.modalOpen && (
					<Modal
						isOpen={this.state.modalOpen}
						shouldCloseOnOverlayClick={true}
						onRequestClose={this.closeModalHandler}
						style={customStyles}
					>
						<span
							className="close"
							style={{ cursor: "pointer" }}
							onClick={this.closeModalHandler}
						>
							<i className="far fa-times-circle"></i>
						</span>

						<UserDetails
							date={this.state.date}
							dateStr={dateStr}
							isActive={isActive}
							onChange={this.onChange}
							user={this.props.user}
						/>
					</Modal>
				)}
			</Aux>
		);
	}
}

export default User;
