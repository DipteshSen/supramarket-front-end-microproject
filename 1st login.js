function validate() {
	validate_name(document.name.emaol);
}

function validate_name(txt) {
	var letters=/^[a-zA-Z]+$/;
	if(txt.value.match(letters))
	{
		return true;
	}
	else{
		alert('Plz Enter Name correctly. Use Only Alphabets');
		return false;
	}
}