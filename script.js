function volume_sphere() {
    //Write your code here
	let radius = parseFloat(document.getElementById("radius").value);

	if(isNaN(radius) || radius<0) {
		return false;
	}

	let volume = (4/3)*Math.PI*Math.pow(radius,3);
	volume = Math.round(volume * 100) / 100;
	document.getElementById("volume").value = volume.toFixed();
	return false;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
