let fullUrl = window.location.href;
let verifier = 0;

console.log(fullUrl);

if (fullUrl.includes("github")) {
	fullUrl = fullUrl.replace('/index', '').replace('/breeds', '').replace('/contactform', '').replace('/place', '');
	verifier = 1;
}

if (fullUrl.includes("localhost") || fullUrl.includes("127.0.0.1")) {
	fullUrl = fullUrl.replace('index.html', '').replace('breeds.html', '').replace('contactform.html', '').replace('place.html', '');
}

document.getElementById('navbar__nosEncontre').onclick = function() {
	if (verifier == 1) {
		window.location.href = fullUrl + "place";
	}
	else {
		window.location.href = fullUrl + "place.html";
	}

};

document.getElementById('navbar__racas').onclick = function() {
	if (verifier == 1) {
		window.location.href = fullUrl + "breeds";
	}
	else {
		window.location.href = fullUrl + "breeds.html";
	}
};

document.getElementById('navbar__contato').onclick = function() {
	if (verifier == 1) {
		window.location.href = fullUrl + "contactform";
	}
	else {
		window.location.href = fullUrl + "contactform.html";
	}
};

document.getElementById('navbar__home').onclick = function() {
	if (verifier == 1) {
		window.location.href = fullUrl + "index";
	}
	else {
		window.location.href = fullUrl + "index.html";
	}
};