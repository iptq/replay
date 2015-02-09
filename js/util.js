var debug = function(msg) {
	document.getElementById("console").innerText += msg + "\n";
};

var toInt = function(arr, endianness) {
	endianness = endianness || 1;
	var result = 0;
	for(var i=0; i<arr.length; i++) {
		var multiplier = Math.pow(256, i);
		result += multiplier * arr[i];
	}
	return result;
};