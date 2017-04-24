const openBtn = document.querySelector('.howIGotStarted  .openBtn')
const storySection = document.querySelector('.howIGotStarted div');
var storyOpened = false;
openBtn.addEventListener('click', function(e) {
	storySection.hidden = !storySection.hidden
	if(storySection.hidden) {
		openBtn.classList.toggle("fa-caret-square-o-right");
		openBtn.classList.toggle("fa-caret-square-o-down");
	}
});