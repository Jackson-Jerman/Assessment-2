console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submited');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function image(){

	alert(compliments)
}

let compliments = document.getElementById('test')

compliments.addEventListener('mouseover', image)