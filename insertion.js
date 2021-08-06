
async function InsertionSort(delay = 700) {
	let bars = document.querySelectorAll(".bar");
    bars[0].style.backgroundColor = "green";

	for (var i = 1; i < bars.length; i += 1) {
        var key = parseInt(bars[i].childNodes[0].innerHTML);
        var height = bars[i].style.height;
        var j = i - 1;
        
        
        bars[i].style.backgroundColor = "red";

        await new Promise((resolve) => setTimeout(() => { resolve(); }, 700));

        while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
            bars[i].style.backgroundColor = "red";
            bars[j].style.backgroundColor = "red";
            
            bars[j+1].style.height = bars[j].style.height;
            bars[j+1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
            
            j = j - 1;
            await new Promise((resolve) => setTimeout(() => { resolve(); }, 700));
            for(var k=i;k>=0;k--){
                bars[k].style.backgroundColor = " green";
            }
        }
        bars[j + 1].style.height = height;
        bars[j + 1].childNodes[0].innerHTML = key;
        await new Promise((resolve) => setTimeout(() => { resolve(); }, 700));
        bars[i].style.backgroundColor = " green";

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
