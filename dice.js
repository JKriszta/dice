

document.getElementById('roll').addEventListener('click', roll)
document.getElementById('restart').addEventListener('click', restart)
let imageDiv = document.getElementById('img');
let counterDiv = document.getElementById('counter');
let list = document.getElementById('list');
let restartButton = document.getElementById('restart')

let clicks = 0;

let randomNumber = 0;


function restart() {
	clicks = 0;
	imageDiv.innerHTML = "";
	counterDiv.innerHTML = "";
	list.innerHTML = "";
	document.getElementById('roll').disabled = false
	restartButton.style.visibility = "hidden"
}

function roll() {

	randomNumber = Math.floor(Math.random() * (7-1) +1);
	console.log("roll: " + clicks + " value: " + randomNumber)

	let el = document.createElement('li')
	el.innerHTML = `${randomNumber}`;

	clicks += 1;
	if (clicks === 5) {
		document.getElementById('roll').disabled = true
		restartButton.style.visibility = "visible"
	}

	if (randomNumber === 1) {
		imageDiv.innerHTML = `<img src="./svg/dice1.svg" alt="dice1" width="100">`;
		counterDiv.innerHTML = `<p>This was the ${clicks}. roll.</p>`;
		list.append(el);

	}
	else if (randomNumber === 2) {
		imageDiv.innerHTML = `<img src="./svg/dice2.svg" alt="dice2" width="100">`;
		counterDiv.innerHTML = `<p>This was the ${clicks}. roll.</p>`;
		list.append(el);
	}
	else if (randomNumber === 3) {
		imageDiv.innerHTML = `<img src="./svg/dice3.svg" alt="dice3" width="100">`;
		counterDiv.innerHTML = `<p>This was the ${clicks}. roll.</p>`;
		list.appendChild(el);
	}
	else if (randomNumber === 4) {
		imageDiv.innerHTML = `<img src="./svg/dice4.svg" alt="dice4" width="100">`;
		counterDiv.innerHTML = `<p>This was the ${clicks}. roll.</p>`;
		list.appendChild(el);
	}
	else if (randomNumber === 5) {
		imageDiv.innerHTML = `<img src="./svg/dice5.svg" alt="dice5" width="100">`;
		counterDiv.innerHTML = `<p>This was the ${clicks}. roll.</p>`;
		list.appendChild(el);
	}
	else if (randomNumber === 6) {
		imageDiv.innerHTML = `<img src="./svg/dice6.svg" alt="dice6" width="100">`;
		counterDiv.innerHTML = `<p>This was the ${clicks}. roll.</p>`;
		list.appendChild(el);
	}


}












