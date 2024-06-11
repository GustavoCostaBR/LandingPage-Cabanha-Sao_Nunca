document.getElementById('slogan').onclick = function() {

	var url = 'https://www.instagram.com/cabanhasaonunca/';


	var novaGuia = window.open(url, '_blank');

	if (novaGuia) {
		novaGuia.focus();
	}
};