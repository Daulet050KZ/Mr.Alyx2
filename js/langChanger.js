function checkSelect() {
	let currentLang = localStorage.getItem('selectLangEn')

	if(currentLang === 'true'){
		if(document.querySelector('html').querySelector('title').innerText === 'MR.ALYX2 - Главная'){
			document.querySelector('html').querySelector('title').innerText = 'MR.ALYX2 - Main'
		}else if(document.querySelector('html').querySelector('title').innerText === 'MR.ALYX2 - Работы'){
			document.querySelector('html').querySelector('title').innerText = 'MR.ALYX2 - Works'
		}else if(document.querySelector('html').querySelector('title').innerText === 'MR.ALYX2 - Персонажи'){
			document.querySelector('html').querySelector('title').innerText = 'MR.ALYX2 - Characters'
		}

		document.querySelector('.header__nav').querySelector('.nav1').innerText = 'Main'
		document.querySelector('.header__nav').querySelector('.nav2').innerText = 'Works'
		document.querySelector('.header__nav').querySelector('.nav3').innerText = 'Characters'

		document.querySelector('#burger').querySelector('div').querySelector('.nav1').innerText = 'Main'
		document.querySelector('#burger').querySelector('div').querySelector('.nav2').innerText = 'Works'
		document.querySelector('#burger').querySelector('div').querySelector('.nav3').innerText = 'Characters'
		
		document.querySelector('.langSelect').innerText = 'EN'

	}else{
		if(document.querySelector('html').querySelector('title').innerText === 'MR.ALYX2 - Main'){
			document.querySelector('html').querySelector('title').innerText = 'MR.ALYX2 - Главная'
		}else if(document.querySelector('html').querySelector('title').innerText === 'MR.ALYX2 - Works'){
			document.querySelector('html').querySelector('title').innerText = 'MR.ALYX2 - Работы'
		}else if(document.querySelector('html').querySelector('title').innerText === 'MR.ALYX2 - Characters'){
			document.querySelector('html').querySelector('title').innerText = 'MR.ALYX2 - Персонажи'
		}

		document.querySelector('.header__nav').querySelector('.nav1').innerText = 'Главная'
		document.querySelector('.header__nav').querySelector('.nav2').innerText = 'Работы'
		document.querySelector('.header__nav').querySelector('.nav3').innerText = 'Персонажи'

		document.querySelector('#burger').querySelector('div').querySelector('.nav1').innerText = 'Главная'
		document.querySelector('#burger').querySelector('div').querySelector('.nav2').innerText = 'Работы'
		document.querySelector('#burger').querySelector('div').querySelector('.nav3').innerText = 'Персонажи'

		document.querySelector('.langSelect').innerText = 'RU'
	}
}
checkSelect()


// localStorage.setItem('selectLangEn', 'false');
// localStorage.setItem('selectLangRu', 'false');