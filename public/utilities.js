function PopulateDepartmentsComboBox(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function ReceivedCallback() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("departmentSelect").innerHTML = CreateSelect(JSON.parse(this.responseText));
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
	var retVal = "";
	retVal += '<select id="department" name="department"> \n';
	for (var index in departments){
		retVal += `<option value="${departments[index].dept_no}">${departments[index].dept_name}</option>`;
	}
	retVal += '</select>';
	return retVal;
}
