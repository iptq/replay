var R = new Replay();

var uploadListener = function(e) {
	var file = e.target.files[0];
	var reader = new FileReader();
	reader.onload = (function(_file) {
		return function(progress) {
			var data = atob(progress.target.result.split("base64,")[1]).split("").map(function(value, index, array) {
				return value.charCodeAt(0); // pad(value.charCodeAt(0).toString(16), 2, "0").toUpperCase();
			});
			R.Parse(data, function(data) {
				R.ReplayData = data;
				console.log(R);
			});
		};
	})(file);
	reader.readAsDataURL(file);
};

if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
	debug("get a better fucking browser");
} else {
	debug("ur browser supports upload");
	document.getElementById("files").addEventListener("change", uploadListener, false);
};