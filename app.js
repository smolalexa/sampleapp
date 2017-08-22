window.onload = init;

function init() {
	//document.getElementByTagName('h1').click = alert('h1 is clicked');
	//var h1Heading = document.getElementsByTagName('h1')[0];
	//h1Heading.onclick = alert('h1 is clicked');

	var h1Heading = document.getElementsByTagName('h1')[0];
h1Heading.onclick = function() {
	alert('h1 is clicked');
}

}

