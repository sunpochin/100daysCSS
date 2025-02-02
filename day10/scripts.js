const dateElement = document.getElementById('date');

const timeElement = document.getElementById('time');

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

document.addEventListener('DOMContentLoaded', () => {
	function updateDateTime() {
		const dateElement = document.querySelector('.dateElement');
		const timeElement = document.querySelector('.timeElement');

		if (dateElement) {
			dateElement.textContent = new Date().toDateString();
		}
		if (timeElement) {
			timeElement.textContent = new Date().toLocaleTimeString();
		}
	}

	updateDateTime();
	setInterval(updateDateTime, 1000);
});
