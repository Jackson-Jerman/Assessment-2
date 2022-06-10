function myFavoriteColor(evt) {
	evt.preventDefault();
	
	alert('My Favorite color is Blue');
}
function myFavoritePlace(evt) {
	evt.preventDefault();
	
	alert('My favorite place is anywhere by the beach',);
}

function myFavoriteRitual(evt) {
	evt.preventDefault();
	
	alert('My favorite ritual are in destiny 2');
}


let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

color.addEventListener('click', myFavoriteColor);
place.addEventListener('click', myFavoritePlace);
ritual.addEventListener('click', myFavoriteRitual);