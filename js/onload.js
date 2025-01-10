let header__logo = document.querySelector('.header__brand').querySelector('img');
let header__title = document.querySelector('.header__brand').querySelector('h2');

window.onload = function() {
	const images = [
		'url("/Mr.Alyx2/img/background/back-1.jpg")', // /Mr.Alyx2/img/background/back-1.webp
		'url("/Mr.Alyx2/img/background/back-2.jpg")', // /Mr.Alyx2/img/background/back-2.webp
		'url("/Mr.Alyx2/img/background/back-3.jpg")', // /Mr.Alyx2/img/background/back-3.webp
		];

	function changeBackground() {
		const randomIndex = Math.floor(Math.random() * images.length);
		document.body.style.backgroundImage = images[randomIndex];
	}

	changeBackground();


	setTimeout(()=> {
		document.querySelector('header').style.opacity = '1'
		document.querySelector('footer').style.opacity = '1'
	}, 1000);

	setTimeout(()=> {
		header__logo.style.transition = '1s';
		header__logo.style.transform = 'translateX(0%) rotate(0deg)';
		header__logo.style.left = '0'
	}, 1200);
	setTimeout(()=> {
		document.querySelector('main').querySelector('.container').style.opacity = '1';
	}, 1200);
	setTimeout(()=> {
		header__logo.style.transition = '1s';
		header__title.style.opacity = '1';
	}, 1500);
	setTimeout(()=> {
		document.querySelector('body').style.transition = '1.3s';
		document.querySelector('body').style.backgroundSize = '100% 100%'
	}, 0);
};

