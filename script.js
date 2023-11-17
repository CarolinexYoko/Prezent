document.getElementById('loadVideo').addEventListener('click', function () {
	var videos = [
		'https://www.youtube.com/embed/0Bmhjf0rKe8',
		'https://www.youtube.com/embed/J---aiyznGQ',
		'https://www.youtube.com/embed/4IP_E7efGWE',
		'https://www.youtube.com/embed/5dsGWM5XGdg',
		'https://www.youtube.com/embed/8-1F-CokXNU',
		'https://www.youtube.com/embed/J11uu8L8FTY',
		'https://www.youtube.com/embed/DXUAyRRkI6k',
		'https://www.youtube.com/embed/YLDbGqJ2KYk',
		'https://www.youtube.com/embed/te1fHMaw4UY',
        
	]

	var video = videos[Math.floor(Math.random() * videos.length)]
	document.getElementById('catVideo').src = video
})

// Funkcja generująca efekt konfetti
function generateConfetti() {
	confetti({
		particleCount: 500,
		spread: 200,
		origin: { y: 0.7 },
	})
}

// Wywołanie efektu konfetti po załadowaniu strony
window.onload = generateConfetti
