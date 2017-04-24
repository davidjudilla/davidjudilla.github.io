const gotStartedHeader = document.querySelector('.gotStartedHeader')
const openBtn = document.querySelector('.howIGotStarted  .openBtn');
const storySection = document.querySelector('.howIGotStarted div');
var storyOpened = false;
gotStartedHeader.addEventListener('click', function(e) {
	storySection.hidden = !storySection.hidden
	openBtn.classList.toggle("fa-caret-square-o-right");
	openBtn.classList.toggle("fa-caret-square-o-down");
});