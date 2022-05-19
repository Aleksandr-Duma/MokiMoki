/*---------------scroll-animate----------------*/

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.price__card-cost');

function onEntry(entry) {
	entry.forEach(change => {
	    if (change.isIntersecting) {
	     	change.target.classList.add('animate');
	    }
	});
}

for (let elm of elements) {
  observer.observe(elm);
}

/*------------------Mob-menu------------------*/

const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.nav-list');
const close = document.querySelector('.close');
const navLink = document.querySelectorAll('.nav-list__link ');

	burger.addEventListener('click', function() {
		navigation.classList.add('active');
		body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		navigation.classList.remove('active');
		body.style.overflow = '';
	});

	navLink.forEach(item => {
		item.addEventListener('click', function() {
			navigation.classList.remove('active');
			body.style.overflow = '';
		});
});

// ----------------------Popup-------------------------

const openPopup = document.querySelector('.button-link');
const popup = document.querySelector('.popup-form');
const closePopup = document.querySelector('.popup-form__close');

	openPopup.addEventListener('click', function(){
		popup.classList.add('open');
		body.style.overflow = 'hidden';
	});

	closePopup.addEventListener('click', function(){
		popup.classList.remove('open');
		body.style.overflow = '';
	});


$(function(){

/*----------------counterUp-----------------*/
	$(".counter").counterUp({
		delay: 10,
		time: 300,
	});

/*----------------Scroll-----------------*/

	$('a.link').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		},800);
	});

/*---------------slider-about----------------*/

	$('.slider-about').slick({
		dots: false,
		autoplay: true,
		prevArrow: '.about-slider__nav-left',
		nextArrow: '.about-slider__nav-right'
	});

/*---------------slider-galery--------------*/
	$('.galery-slider').slick({
		dots: false,
		autoplay: false,
		prevArrow: '.portfolio-galery__nav-left',
		nextArrow: '.portfolio-galery__nav-right'
	});

// ......................MixItUp2......................

	$('#portfolio__body').mixItUp();
	
});