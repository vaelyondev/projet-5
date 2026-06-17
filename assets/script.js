const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Dots

const dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");

	dot.classList.add("dot");

	if (i === 0) {
		dot.classList.add("dot_selected");
	}

	dots.appendChild(dot);
}

// MAJ carousel

const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

let currentSlide = 0;

function updateCarousel() {
	bannerImage.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	bannerText.innerHTML = slides[currentSlide].tagLine;

	const dots = document.querySelectorAll(".dot");

	dots.forEach(dot => {
		dot.classList.remove("dot_selected");
	});

	dots[currentSlide].classList.add("dot_selected");
}

// Flèches

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", () => {

	if (currentSlide === slides.length - 1) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}

	updateCarousel();
});

arrowLeft.addEventListener("click", () => {

	if (currentSlide === 0) {
		currentSlide = slides.length - 1;
	} else {
		currentSlide--;
	}

	updateCarousel();
});