let button = document.getElementById('play-button');
let text= document.getElementById('challenge-one');
let body = document.getElementsByTagName('BODY')[0];
let title = document.getElementById('page-title');

text.addEventListener("dblclick", whenDuoClicked);
button.addEventListener("click", whenClicked);
button.addEventListener("mouseover", whenHovered);
title.addEventListener("copy", whenCopied)
body.addEventListener("contextmenu",whenRightClicked)

function whenClicked() {
	button.style.top = Math.random() *100 + '%';
	button.style.left = Math.random() *100 + '%';
}

function whenDuoClicked() {
	body.removeChild(text)
}

function whenHovered() {
	button.style.backgroundColor = "red"; 

}

function whenCopied() {
	alert("Don't cantch up rall");
}

function whenRightClicked(){
	body.backgroundImage = ('images/pokemonBG2.png');
}