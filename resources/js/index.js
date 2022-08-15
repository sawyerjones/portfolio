let imgArr = Array.from(document.getElementsByTagName('img'));
imgArr.forEach(clickListener);

let paraArr = Array.from(document.getElementsByTagName('p'));
//adds event listener
function clickListener(e) {
	e.addEventListener('click', imgClicker);
}

function imgClicker(e) {
	//removes the effect completely, then adds it to the clicked element
	imgArr.forEach(el => {
		el.classList.remove('img-active');
	})
	e.target.classList.add('img-active');
	//controls the description text
	let id = e.target.id;
	let paraId;
	for (let i = 0; i < paraArr.length; i++){
		paraId = paraArr[i].id;
		//checks what language clicked img was
		if (id.includes(paraId)) {
			//hides every block
			paraArr.forEach(el => {
				el.classList.add('hide');
			});
			//displays the correct text
			paraArr[i].classList.remove('hide')
		}
	}
}