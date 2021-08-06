const container = document.querySelector(".data-container");


function generatebars(num = 20) {


	for (let i = 0; i < num; i += 1) {


		const value = Math.floor(Math.random() * 100) + 1;

		const bar = document.createElement("div");

		bar.classList.add("bar");

		bar.style.height = `${value * 3}px`;

		bar.style.transform = `translateX(${i * 30}px)`;

		const barLabel = document.createElement("label");

		barLabel.classList.add("bar_id");

		barLabel.innerHTML = value;

		bar.appendChild(barLabel);

		container.appendChild(bar);
	}
}

async function SelectionSort(delay = 300) {
	let bars = document.querySelectorAll(".bar");

	var min_idx = 0;
	for (var i = 0; i < bars.length; i += 1) {

		min_idx = i;
		await new Promise((resolve) => setTimeout(() => { resolve(); }, 100));

		bars[i].style.backgroundColor = "darkblue";
		for (var j = i + 1; j < bars.length; j += 1) {
			await new Promise((resolve) => setTimeout(() => { resolve(); }, 100));

			bars[j].style.backgroundColor = "red";

			await new Promise((resolve) => setTimeout(() => { resolve(); }, 100));

			var val1 = parseInt(bars[j].childNodes[0].innerHTML);

			var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

			if (val1 < val2) {
				if (min_idx !== i) {

					bars[min_idx].style.backgroundColor = "rgb(55, 141, 175)";
				}
				min_idx = j;
			} else {

				bars[j].style.backgroundColor = "rgb(55, 141, 175)";
			}
		}

		var temp1 = bars[min_idx].style.height;
		var temp2 = bars[min_idx].childNodes[0].innerText;
		bars[min_idx].style.height = bars[i].style.height;
		bars[i].style.height = temp1;
		bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
		bars[i].childNodes[0].innerText = temp2;

		await new Promise((resolve) => setTimeout(() => { resolve(); }, 100));

		bars[min_idx].style.backgroundColor = "rgb(55, 141, 175)";

		bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	}

	document.getElementById("Button1").disabled = false;
	document.getElementById("Button2").disabled = false;
	document.getElementById("Button3").disabled = false;
	document.getElementById("Button4").disabled = false;
	document.getElementById("Button5").disabled = false;
	document.getElementById("Button6").disabled = false;

}

generatebars();

function generate() {
	window.location.reload();
}

function disable() {

	document.getElementById("Button1").disabled = true;
	document.getElementById("Button2").disabled = true;
	document.getElementById("Button3").disabled = true;
	document.getElementById("Button4").disabled = true;
	document.getElementById("Button5").disabled = true;
	document.getElementById("Button6").disabled = true;

}
