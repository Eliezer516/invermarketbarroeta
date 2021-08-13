window.addEventListener('scroll', () => {
	const navigation_menu = document.querySelector('nav');
	navigation_menu.classList.toggle('sticky', window.scrollY > 0)
})