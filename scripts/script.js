document.getElementById('slogan').onclick = function() {

	var url = 'https://www.instagram.com/cabanhasaonunca/';


	var novaGuia = window.open(url, '_blank');

	if (novaGuia) {
		novaGuia.focus();
	}
};

// const basePath = window.location;

let fullUrl = window.location.href.replace('index.html', '').replace('breeds.html', '').replace('contactform.html', '').replace('place.html', '');

document.getElementById('navbar__nosEncontre').onclick = function() {
	window.location.href = fullUrl + "/place.html";
};

document.getElementById('navbar__racas').onclick = function() {
	window.location.href = fullUrl + "/breeds.html";
};

document.getElementById('navbar__contato').onclick = function() {
	window.location.href = fullUrl + "/contactform.html";
};

document.getElementById('navbar__home').onclick = function() {
	window.location.href = fullUrl + "/index.html";
};