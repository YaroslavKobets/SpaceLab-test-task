const loadMoreBtn = document.querySelector('.load-more')
if (loadMoreBtn) {
	loadMoreBtn.addEventListener('click', showMore)
	function showMore() {
		document.querySelectorAll('.watch__box').forEach(element => {
			element.style.display = 'block'
		})
		loadMoreBtn.remove()
	}
}

const swiper = new Swiper('.swiper', {
	loop: true,

	grabCursor: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 1.4,
			spaceBetween: 10,
			centeredSlides: true,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		576: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1450: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
})

if (document.querySelector('.menu')) {
	const menuIcon = document.querySelector('.menu__icon')
	const headerMenu = document.querySelector('.menu')

	if (menuIcon) {
		menuIcon.addEventListener('click', function (event) {
			document.body.classList.toggle('lock')
			menuIcon.classList.toggle('active')
			headerMenu.classList.toggle('active')
		})
	}
}
