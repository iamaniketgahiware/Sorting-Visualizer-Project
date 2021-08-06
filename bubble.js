
async function BubbleSort(delay = 300) {
	let bars = document.querySelectorAll(".bar");
	for (var i = 0; i < bars.length; i += 1) {

		for (var j = 0; j < bars.length-1-i; j += 1) {
           
			bars[j].style.backgroundColor = "yellow";

			await new Promise((resolve) => setTimeout(() => { resolve(); }, 300));

			var val1 = parseInt(bars[j].childNodes[0].innerHTML);

			var val2 = parseInt(bars[j+1].childNodes[0].innerHTML);

		if (val1 > val2) {
			
		bars[j+1].style.backgroundColor = "green";
		var temp1 = bars[j].style.height;
		var temp2 = bars[j].childNodes[0].innerText;
		bars[j].style.height = bars[j+1].style.height;
		bars[j+1].style.height = temp1;
		bars[j].childNodes[0].innerText = bars[j+1].childNodes[0].innerText;
		bars[j+1].childNodes[0].innerText = temp2;
		}
        
             bars[j].style.backgroundColor = "rgb(55, 141, 175)";
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 200)
		);


		bars[j].style.backgroundColor = "rgb(55, 141, 175)";
	}
    
}
document.getElementById("Button1").disabled = false;
document.getElementById("Button2").disabled = false;
document.getElementById("Button3").disabled = false;
document.getElementById("Button4").disabled = false;
document.getElementById("Button5").disabled = false;
document.getElementById("Button6").disabled = false;
function disable() {
document.getElementById("Button1").disabled = true;
document.getElementById("Button2").disabled = true;
document.getElementById("Button3").disabled = true;
document.getElementById("Button4").disabled = true;
document.getElementById("Button5").disabled = true;
document.getElementById("Button6").disabled = true;
}
}
