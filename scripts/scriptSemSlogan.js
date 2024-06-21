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