function validate2(){
if(document.Login.Username.value=="")
	{
		alert("Please provide your Username");
		document.Login.Username.focus();
		return false;	
	}
if(document.Login.Password.value=="")
	{
		alert("Please provide your Password");
		document.Login.Password.focus();
		return false;	
	}
	return true;
}