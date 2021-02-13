window.onload = function loadFn() {
	let containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//my code here
		alert(event.target.id);
	});
};
