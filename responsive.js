function collapse(){

	var x= document.getElementbyId("navig");
	if (x.className ==="navigation"){
		x.className += "responsive";
	} else{
		x.className="navigation";
	}
}