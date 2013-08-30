var bRus = false;

function ToggleRus(){
	bRus = !bRus;
	var arr = document.getElementsByTagName("td");
	for(var i=0; i<arr.length; i++){
		if(arr[i].className=="rus")
			arr[i].style.display=bRus?"block":"none";
	}
}