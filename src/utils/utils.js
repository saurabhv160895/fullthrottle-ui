exports.createActvityPeriodObj = (activityPeriod) => {
	let start = activityPeriod.start_time.split(" ");
	start = start.filter((activityPeriod) => {
		return activityPeriod !== "";
	});

	let end = activityPeriod.end_time.split(" ");
	const obj = {
		month: start[0],
		date: start[1],
		year: start[2],
		start_time: start[3],
		end_time: end[3],
	};
	return obj;
};

exports.getFormattedDate = (date) => {
	const selectedDate = date.getDate().toString();
	const selectedMonth = date.toLocaleString("default", {
		month: "short",
	});
	const selectedYear = date.getFullYear().toString();

	return `${selectedDate} ${selectedMonth} ${selectedYear}`;
};

exports.checkIsActive = (date, activityPeriods) => {
	//Extract the selected date from the calendar
	const selectedDate = date.getDate().toString();
	const selectedMonth = date.toLocaleString("default", {
		month: "short",
	});
	const selectedYear = date.getFullYear().toString();

	return activityPeriods.filter((el) => {
		return (
			el.month === selectedMonth &&
			el.date === selectedDate &&
			el.year === selectedYear
		);
	});
};
