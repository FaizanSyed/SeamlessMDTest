// Function to capitalize first letter of a word
function upFirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getInfo() {
	var patientData = JSON.parse(data);

	// Recursively get full name
	var fullName = "";
	var givenNameLen = patientData.identifier[0].name[0].given.length;
	for (var i = 0; i < givenNameLen; i++) {
		fullName += patientData.identifier[0].name[0].given[i];
		fullName += " ";
	}
	var familyNameLen = patientData.identifier[0].name[0].family.length;
	for (var i = 0; i < familyNameLen; i++) {
		fullName += patientData.identifier[0].name[0].family[i];
		fullName += " ";
	}
	document.getElementById("name").innerHTML = fullName;

	// Display orginization name
	document.getElementById("orgName").innerHTML = patientData.identifier[0].managingOrganization.display;

	// Display gender with first letter capitalized
	document.getElementById("gender").innerHTML = upFirst(patientData.identifier[0].gender);

	// Display number of conditions
	var condLen = patientData.identifier[0].conditions.length;
	document.getElementById("numConds").innerHTML = condLen;
	var conds = [];
	for (var i = 0; i < condLen; i++) {
		conds.push(patientData.identifier[0].conditions[i]);
	}
	// Display conditions in a list
	$.each(conds, function( key, val ) {
 		var $li = $("<li>"+"- "+val+"</li>");      
 		$("#conds").append($li);            
 	});

}
