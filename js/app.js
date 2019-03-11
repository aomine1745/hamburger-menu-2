const btn = document.getElementById('btn');
btn.addEventListener('click', active);
function active(){
	this.classList.toggle('active')
}