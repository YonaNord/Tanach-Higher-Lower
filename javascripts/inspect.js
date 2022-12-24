document.onkeydown = function(e) {
	if(event.keyCode == 123) {
		return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
		return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.chatCodeAt(0)) {
		return false;
	}
	if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.chatCodeAt(0)) {
		return false;
	}
	if(e.ctrlKey && e.keyCode == 'U'.chatCodeAt(0)) {
		return false;
	}
}

document.addEventListener('contextmenu', function(e) {
	e.preventDefault();
});