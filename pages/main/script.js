'use strict'
const body = document.querySelector('body');

//hamburger menu
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

//general array

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
		"name": "Scarlett",
		"img": "../../assets/images/pets-scarlet_no-bg.webp",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
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
		"img": "../../assets/images/pets-fredie_no-bg.webp",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		"age": "2 months",
		"inoculations": ["rabies"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Charly",
		"img": "../../assets/images/pets-charly.webp",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
		"diseases": ["deafness", "blindness"],
		"parasites": ["lice", "fleas"]
	}
]

// slider
// const carouselBlock = document.querySelector('.our-friends__block');
// const leftArrow = document.querySelector('.our-friends__arrow--left');
// const rightArrow = document.querySelector('.our-friends__arrow--right');
// const carouselWrapper = document.querySelector('.our-friends__carousel-wrapper');
// const carousel = document.querySelector('.gallery-our-friends');
// const carouselItem = document.querySelector('.gallery-our-friends__item');
// const carouselCards = document.querySelectorAll('.gallery-our-friends__card');
// const cardImage = document.querySelectorAll('.gallery-our-friends__picture');
// const cardTitle = document.querySelectorAll('.gallery-our-friends__title');
// const cardBtn = document.querySelectorAll('.btn--transparent');

// function itemAdd() {
// 	let newItem = document.createElement('div');
// 	let newCard = document.createElement('div');
// 	let newCardTwo = document.createElement('div');
// 	let newCardThree = document.createElement('div');
// 	let newCardImage = document.createElement('img');
// 	let newCardImageTwo = document.createElement('img');
// 	let newCardImageThree = document.createElement('img');
// 	let newCardTittle = document.createElement('h4');
// 	let newCardTittleTwo = document.createElement('h4');
// 	let newCardTittleThree = document.createElement('h4');
// 	let newCardButton = document.createElement('div');
// 	carousel.append(newItem);
// 	carousel.prepend(newItem);
// 	newItem.classList.add('gallery-our-friends__item');
// 	for (let i = 0; i < generalArray.length; i+3){
// 		newItem.append(newCard);
// 		newItem.append(newCardTwo);
// 		newItem.append(newCardThree);
// 		newCard.classList.add('gallery-our-friends__card');
// 		newCardTwo.classList.add('gallery-our-friends__card');
// 		newCardThree.classList.add('gallery-our-friends__card');
// 		newCard.append(newCardImage);
// 		newCardTwo.append(newCardImageTwo);
// 		newCardThree.append(newCardImageThree);
// 		newCardImage.src = generalArray[i]["img"];
// 		newCardImageTwo.src = generalArray[i+1]["img"];
// 		newCardImageThree.src = generalArray[i+2]["img"];
// 		newCardImage.classList.add('gallery-our-friends__picture');
// 		newCardImageTwo.classList.add('gallery-our-friends__picture');
// 		newCardImageThree.classList.add('gallery-our-friends__picture');
// 		newCard.append(newCardTittle);
// 		newCardTwo.append(newCardTittleTwo);
// 		newCardThree.append(newCardTittleThree);
// 		newCardTittle.textContent = generalArray[i]["name"];
// 		newCardTittleTwo.textContent = generalArray[i+1]["name"];
// 		newCardTittleThree.textContent = generalArray[i+2]["name"];
// 		newCardTittle.classList.add('gallery-our-friends__title');
// 		newCardTittleTwo.classList.add('gallery-our-friends__title');
// 		newCardTittleThree.classList.add('gallery-our-friends__title');
// 		newCard.append(newCardButton);
// 		newCardTwo.append(newCardButton);
// 		newCardThree.append(newCardButton);
// 		newCardButton.textContent = "Learn more";
// 		newCardButton.classList.add('btn');
// 		newCardButton.classList.add('btn--transparent');
// 	}
// }

// function moveCardsLeft() {
// 	carousel.classList.add('transition-left');
// }
// function moveCardsRight() {
// 	carousel.classList.add('transition-right');
// }

// // leftArrow.addEventListener('click', itemAdd);
// // rightArrow.addEventListener('click', itemAdd);
// leftArrow.addEventListener('click', moveCardsLeft);
// rightArrow.addEventListener('click', moveCardsRight);

//popup
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

console.log(`итог 35 баллов, слайдер и пагинация не сделаны`);