for(let i = 1; i <= 15; i++){
	document.querySelectorAll('#img-' + i).forEach(function(item) {
		item.onclick = function() {
			let image = this.src;
			document.querySelector('.image-view').style.display = 'flex';
			document.querySelector('.image-view').querySelector('img').src = image;
			document.querySelector('header').style.display = 'none';
			document.querySelector('body').style.overflow = 'hidden';

			if(10 <= i || i >= 14){
				document.querySelector('.image-view').querySelector('img').style.width = '80%';
			}else{
				document.querySelector('.image-view').querySelector('img').style.width = '50%';
			};
		};
	});
};

document.querySelector('.fa-solid.fa-xmark').onclick = function() {
	document.querySelector('.image-view').style.display = 'none';
	document.querySelector('header').style.display = 'flex';
	document.querySelector('body').style.overflow = 'visible';
}

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape") {
		document.querySelector('.image-view').style.display = 'none';
		document.querySelector('header').style.display = 'flex';
		document.querySelector('body').style.overflow = 'visible';
	}
});