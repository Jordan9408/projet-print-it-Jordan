const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const banner = document.querySelector('#banner');
const nbImg = slides.length;

arrowLeft.addEventListener('click', () => {
	n--; // image actuelle
	if(n < 0) {
		n = nbImg - 1;
	}	
	changeSlides(n);
});

arrowRight.addEventListener('click', () => {	
	n++;
	if(n > nbImg-1) {
		n = 0;
	}	
	changeSlides(n);
});
// créer dots
const displayDots = (nbImg) => {
	const dotsElement = document.querySelector('#banner .dots');
	for(let i=0; i< nbImg; i++) {
		dotsElement.insertAdjacentHTML('beforeend', `<div data-id="${i}" class="dot"></div>`);
	}
}
displayDots(nbImg);

// afficher image et slogan
const changeSlides = (numImg=0)=> {
	if(!banner.firstElementChild.classList.contains('banner-img')) {
		banner.insertAdjacentHTML('afterbegin', `<img class="banner-img" src="./assets/images/slideshow/${slides[numImg].image}" alt="${slides[numImg].tagLine}">` );
	} else {
		banner.firstElementChild.setAttribute('src', `./assets/images/slideshow/${slides[numImg].image}`)
	}

	// slogan
	const textBanner = `${slides[numImg].tagLine}`;
	banner.firstElementChild.nextElementSibling.innerHTML = textBanner;

	// selected dot
	const dotElements = banner.querySelectorAll('.dot');
	console.log(dotElements)
	dotElements.forEach((dot, index)=> {
		if(index === numImg) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});

	return numImg;
}
let n = changeSlides();

// click sur les dot
const dotsHandler = () => {
	const dotElements = banner.querySelectorAll('.dot');
	for (let dotElement of dotElements) {
		dotElement.style.cursor = 'pointer';
		dotElement.addEventListener('click', (e) => {
			let idElement = Number(e.target.dataset.id);
			changeSlides(idElement);
		})
	}
}
dotsHandler();















