'use strict'
const body = document.querySelector('body');

/*---------------burger-menu----------------*/

const hamburger = document.querySelector('.hamburger');
const headerList = document.querySelector('.header__list');
const navLinks = document.querySelectorAll('.header__item');
const hamburgerOverlay = document.querySelector('.hamburger-overlay');
function toggleMenu() {
	hamburger.classList.toggle('open');
	headerList.classList.toggle('open');
	hamburgerOverlay.classList.toggle('open');
	body.classList.toggle('overflow');
}

function closeMenu() {
	hamburger.classList.remove('open');
	headerList.classList.remove('open');
	hamburgerOverlay.classList.remove('open');
	body.classList.remove('overflow');
}

hamburger.addEventListener('click', toggleMenu);
hamburgerOverlay.addEventListener('click', closeMenu);
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

/*---------------general-array----------------*/

const generalArray = [
	{
		"name": "Jennifer",
		"img": "../../assets/images/pets-jennifer_no_bg.webp",
		"type": "Dog",
		"breed": "Labrador",
		"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		"age": "2 months",
		"inoculations": ["none"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Sophia",
		"img": "../../assets/images/pets-sophia.webp",
		"type": "Dog",
		"breed": "Shih tzu",
		"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 month",
		"inoculations": ["parvovirus"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Woody",
		"img": "../../assets/images/pets-woody_no_bg.webp",
		"type": "Dog",
		"breed": "Golden Retriever",
		"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		"age": "3 years 6 months",
		"inoculations": ["adenovirus", "distemper"],
		"diseases": ["right back leg mobility reduced"],
		"parasites": ["none"]
	},
	{
		"name": "Scarlet",
		"img": "../../assets/images/pets-scarlet_no-bg.webp",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "Scarlet is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		"age": "3 months",
		"inoculations": ["parainfluenza"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Katrine",
		"img": "../../assets/images/pets-katrine_no_bg.webp",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		"age": "6 months",
		"inoculations": ["panleukopenia"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Timmy",
		"img": "../../assets/images/pets-timmy_no-bg.webp",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		"age": "2 years 3 months",
		"inoculations": ["calicivirus", "viral rhinotracheitis"],
		"diseases": ["kidney stones"],
		"parasites": ["none"]
	},
	{
		"name": "Freddie",
		"img": "../../assets/images/pets-freddie_no-bg.webp",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		"age": "2 months",
		"inoculations": ["rabies"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Charley",
		"img": "../../assets/images/pets-charly.webp",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
    "description": "This cute boy, Charley, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
		"diseases": ["deafness", "blindness"],
		"parasites": ["lice", "fleas"]
	}
];

/*---------------popup----------------*/

const galleryOurFriendsItem = document.querySelector('.gallery-our-friends__item');
const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup__overlay');
const popupCloseButton = document.querySelector('.popup__close');
const popupOpenCards = document.querySelectorAll('.gallery-our-friends__card');
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__title');
const subTitle = document.querySelector('.popup__subtitle');
const popupText = document.querySelector('.popup__text');
const popupItemAge = document.querySelector('.popup-item-age');
const popupItemInoculations = document.querySelector('.popup-item-inoculations');
const popupItemDiseases = document.querySelector('.popup-item-diseases');
const popupItemParasites= document.querySelector('.popup-item-parasites');

function popupOpen() {
	popup.classList.add('open');
	body.classList.add('overflow');
	popupOverlay.classList.add('open');
}

function popupClose() {
	popup.classList.remove('open');
	body.classList.remove('overflow');
	popupOverlay.classList.remove('open');
}

galleryOurFriendsItem.addEventListener('click', function (event) {
	let target = event.target.closest('.gallery-our-friends__card');
	for (let i = 0; i < generalArray.length; i++) {
		if (target.dataset.name == generalArray[i]["name"]) {
			popupImage.style.backgroundImage = `url('${generalArray[i]["img"]}')`;
			popupTitle.textContent = generalArray[i]["name"];
			subTitle.textContent = generalArray[i]["breed"];
			popupText.textContent = generalArray[i]["description"];
			popupItemAge.textContent = generalArray[i]["age"];
			popupItemInoculations.textContent = generalArray[i]["inoculations"];
			popupItemDiseases.textContent = generalArray[i]["diseases"];
			popupItemParasites.textContent = generalArray[i]["parasites"];
		}
	};
	popupOpen();
  }
)

popupOpenCards.forEach(element => {
	element.addEventListener('click', popupOpen);
});
popupCloseButton.addEventListener('click', popupClose);
popupOverlay.addEventListener('click', popupClose);

/*---------------slider----------------*/

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 3,
  spaceBetween: 90,
  hashNavigation: {
    watchState: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    eventsTarget: '.swiper',
  },
  watchOverflow: true,
  centeredSlides: true,
  initialSlide: 1,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 10
    },
    480: {
      spaceBetween: 20
    },
    500: {
      spaceBetween: 30
    },
    800: {
      spaceBetween: 60
    },
    950: {
      spaceBetween: 90
    },
    1010: {
      spaceBetween: 110
    }
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  observer: true,
  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
    paginationBulletMessage: 'Go to slide {{index}}',
    notificationClass: 'swiper-notification',
    containerMessage: '',
    containerRoleDescriptionMessage: '',
    itemRoleDescriptionMessage: '',
  }
});
