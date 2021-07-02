const img = document.querySelector('.large-img');
const imgAll = document.querySelectorAll('.small-img');
imgAll.forEach(element => {
	element.addEventListener('click', () => {
		imgAll.forEach(element => {
			element.style.opacity = '0.5';
		});
		img.setAttribute('src', element.src);
		element.style.opacity = '1';
	});
});