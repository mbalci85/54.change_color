// In this Project, your web page background color will be changed randomly when you clicked button on the page.

const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'coral'];

let button1 = document.getElementById('button1');

button1.onclick = () => {
	let colorIndex = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[colorIndex];
	document.getElementById('button1').innerHTML = colors[colorIndex];
	document.getElementById('button1').style.backgroundColor = colors[colorIndex];

	document.querySelector('h1').innerHTML = colors[colorIndex];
};

let button2 = document.getElementById('button2');

button2.onclick = () => {
	let hexCodeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
	let hexCode = ['#'];

	for (let i = 0; i < 6; i++) {
		hexCode.push(hexCodeArray[Math.floor(Math.random() * hexCodeArray.length)]);
	}
	console.log(hexCode.join(''));
	document.body.style.backgroundColor = hexCode.join('');
	document.getElementById('button2').innerHTML = hexCode.join('');
	document.getElementById('button2').style.backgroundColor = hexCode.join('');
	document.querySelector('h1').innerHTML = hexCode.join('');
};
