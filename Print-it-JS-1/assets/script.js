const slides = [
	{
		imageUrl: "./assets/images/slideshow/slide1.jpg",
		tagLine :"Impressions tous formats en boutique et en ligne"
	},
	{
		imageUrl: "./assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format pour vos bureaux et events"
	},
	{
		imageUrl: "./assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs de CMJN aux pantones"
	},
	{
		imageUrl: "./assets/images/slideshow/slide4.png",
		tagLine:"Autocollants avec découpe laser sur mesure"
	}
]

// Déclaration des éléments à importer + déclaration des variables pour initialiser
const right = document.getElementById("right")
const left = document.getElementById("left")
const dots = document.getElementById("dots")
const dot = document.querySelectorAll(".dots")
let i = 0

// Déclaration des events
right.addEventListener("click", rightClick) 
left.addEventListener("click", leftClick)

// Boucle pour la création des bullet points
function displayDots() {
	for (let n = 0; n < slides.length; n++) {
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dots.appendChild(dot)
	}
}
displayDots()

// Mise dans un tableau des bullet points nouvellement créés + initialisation premier point
const arrayDots = document.querySelectorAll(".dots .dot")
arrayDots[0].classList.add("dot_selected")
console.log(arrayDots)

// Fonction clic droit
function rightClick() {
	arrayDots[i].classList.remove("dot_selected")
	i++
	if (i > slides.length - 1) {
		i = 0
	}
	arrayDots[i].classList.add("dot_selected")
	document.getElementById("img").src = slides[i].imageUrl
	p.textContent = slides[i].tagLine
}

// Fonction clic gauche
function leftClick() {
	arrayDots[i].classList.remove("dot_selected")
	i--
	if (i < 0) {
		i = slides.length - 1
	}
	arrayDots[i].classList.add("dot_selected")
	document.getElementById("img").src = slides[i].imageUrl
	p.textContent = slides[i].tagLine
}