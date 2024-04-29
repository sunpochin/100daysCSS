const toggle = document.getElementById('toggle');

const bars = toggle.querySelectorAll('.bar');

toggle.addEventListener('click', () => {
	bars.forEach((bar) => {
		if (bar.classList.contains('active')) {
			bar.classList.toggle('rotate');

			setTimeout(() => {
				bar.classList.toggle('active');
			}, 200);
		} else {
			bar.classList.toggle('active');

			setTimeout(() => {
				bar.classList.toggle('rotate');
			}, 200);
		}
	});
});
