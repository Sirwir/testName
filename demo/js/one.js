document.addEventListener("DOMContentLoaded", function() {
    const bgImage = document.getElementById('bgImage');
    bgImage.style.opacity = 1;
    bgImage.style.filter = 'blur(0)';
    bgImage.style.backgroundImage = `url('../img/0.jpg')`;
});
	const slider = document.querySelector('.slider');
		function activate(e) {
			const items = document.querySelectorAll('.item');
			e.target.matches('.next') && slider.append(items[0]);
			e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
		}
		
		document.addEventListener('click', activate, false);