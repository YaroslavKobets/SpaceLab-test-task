const $ = selector => document.querySelector(selector)

const addEventListenerIfExists = (selector, event, handler) => {
	const element = $(selector)
	if (element) {
		element.addEventListener(event, handler)
	}
}

function validateEmail() {
	const emailInput = $('#emailInput')
	const errorMessage = $('#error-message')
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	errorMessage.textContent = emailInput.value.match(emailPattern)
		? ''
		: 'Некоректний формат email'
}

document.addEventListener('DOMContentLoaded', function () {
	addEventListenerIfExists('.load-more', 'click', function () {
		document.querySelectorAll('.watch__box').forEach(element => {
			element.style.display = 'block'
		})
		$('.load-more').remove()
	})

	new Swiper('.swiper', {
		loop: true,
		grabCursor: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			0: { slidesPerView: 1.4, spaceBetween: 10, centeredSlides: true },
			480: { slidesPerView: 2, spaceBetween: 20 },
			576: { slidesPerView: 3, spaceBetween: 20 },
			768: { slidesPerView: 4, spaceBetween: 20 },
			992: { slidesPerView: 3, spaceBetween: 20 },
			1450: { slidesPerView: 3, spaceBetween: 50 },
		},
	})

	addEventListenerIfExists('.menu__icon', 'click', function () {
		document.body.classList.toggle('lock')
		$('.menu__icon').classList.toggle('active')
		$('.menu').classList.toggle('active')
	})

	addEventListenerIfExists('#emailInput', 'input', validateEmail)

	addEventListenerIfExists('.search-btn', 'click', function (event) {
		const searchPopup = $('.search-popup')
		const searchInput = $('.search-popup  input')
		searchPopup.classList.toggle('active')
		searchInput.focus()
		event.stopPropagation()
	})

	document.addEventListener('click', function () {
		$('.search-popup').classList.remove('active')
	})

	$('.search-popup').addEventListener('click', function (event) {
		event.stopPropagation()
	})
})
