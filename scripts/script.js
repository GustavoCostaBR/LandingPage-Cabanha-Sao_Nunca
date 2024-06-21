document.getElementById('slogan').onclick = function() {

	var url = 'https://www.instagram.com/cabanhasaonunca/';


	var novaGuia = window.open(url, '_blank');

	if (novaGuia) {
		novaGuia.focus();
	}
};

document.getElementById('navbar__nosEncontre').onclick = function() {
	window.location.href = "../place.html";
};

document.getElementById('navbar__racas').onclick = function() {
	window.location.href = "../breeds.html";
};

document.getElementById('navbar__contato').onclick = function() {
	window.location.href = "../contactform.html";
};