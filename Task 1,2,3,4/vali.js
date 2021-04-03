function validate(){

	var fname=document.PassengerRegistration.Full_Name
if(document.PassengerRegistration.Full_Name.value=="")
	{
		alert("Please provide your name");
		document.PassengerRegistration.Full_Name.focus();
		return false;	
	}
		
var email = document.PassengerRegistration.Email_Id.value;

at = email.indexOf("@");

dot = email.lastIndexOf(".");

 if (email == "" || at< 1 || ( dot- at< 2 )) 
 {
alert("Please enter correct email ID")
document.PassengerRegistration.Email_Id.focus() ;
     return false;
 }

if(document.PassengerRegistration.Password.value=="")
	{
		alert("Please provide your Password");
		document.PassengerRegistration.Password.focus();
		return false;	
	}

if(document.PassengerRegistration.Address.value=="")
	{
		alert("Please provide your Address");
		document.PassengerRegistration.Address.focus();
		return false;	
	}

if( document.PassengerRegistration.Contact_Number.value == "" ||  isNaN( document.PassengerRegistration.Contact_Number.value) ||
document.PassengerRegistration.Contact_Number.value.length != 10 )
   {
alert( "Please provide a Contact No in the format 123. and max length is 10" );
document.PassengerRegistration.Contact_Number.focus() ;
     return false;
   }
		

	return true;
}
