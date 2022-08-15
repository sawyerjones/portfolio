let imgArr = Array.from(document.getElementsByTagName('img'));
imgArr.forEach(clickListener);

let paraArr = Array.from(document.getElementsByTagName('p'));
paraArr.push(document.getElementById('starterImg'));
//adds event listener
function clickListener(e) {
	e.addEventListener('click', imgClicker);
}

//lets some images be unclickable (they cant be highlighted)
let unclickableImg = Array.from(document.getElementsByClassName('noClick'))
unclickableImg.forEach(removeListener);
function removeListener(e) {
	e.removeEventListener('click', imgClicker);
}

function imgClicker(e) {
	//if already highlighted, then show the starterImg
	if (e.target.classList.contains('img-active')) {
		//removes border
		e.target.classList.remove('img-active');
		//hides all description paragraphs, then shows the profile image again
		paraArr.forEach(hideAllPara);
		document.getElementById('starterImg').classList.add('show');
		document.getElementById('starterImg').classList.remove('hide');
	} else {
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
					el.classList.remove('show');
				});
				//displays the correct text
				paraArr[i].classList.remove('hide');
				paraArr[i].classList.add('show');
			}
		}
	}
}

function hideAllPara(el) {
	el.classList.add('hide');
}