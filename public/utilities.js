function PopulateDepartmentsComboBox(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function ReceivedCallback() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("output").innerHTML = CreateSelect(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", "http://leia.cs.spu.edu:3000/api/departments", true);
	xhttp.send();
}
function CreateSelect(departments){
	// <select id="department" name="department">
	// 		<option value="id1">name1</option>
	//		<option value="id2">name2</option>
	//		...
	// </select>

	
}
