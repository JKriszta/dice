

document.getElementById('roll').addEventListener('click', roll)
document.getElementById('restart').addEventListener('click', restart)
let imageDiv = document.getElementById('img');
let counterDiv = document.getElementById('counter');
let list = document.getElementById('list');
let restartButton = document.getElementById('restart')

let clicks = 0;

let randomNumber = 0;


function actions(rn,cl,obj){
	imageDiv.innerHTML = `<img src="./svg/dice${rn}.svg" alt="dice${rn}" width="100">`;
	counterDiv.innerHTML = `<p>This was the ${cl}. roll.</p>`;
	list.append(obj);

}

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


	actions(randomNumber, clicks, el);

}












