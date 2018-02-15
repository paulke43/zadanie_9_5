var buttons = document.getElementsByClassName('button');
var size = buttons.length;

for (var i = 0; i < size; i++) {
	alert(buttons[i].innerText);
	console.log(buttons[i].innerHTML);
}