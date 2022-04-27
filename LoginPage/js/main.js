var inputs = document.getElementsByTagName('input');  
var uName = document.getElementById('your_name');
var namee = document.getElementById('name');
var email = document.getElementById('email');
var pass = document.getElementById('your_pass');

//set All inputs feild Required
for(var i = 0 ; i<inputs.length ; i++)
inputs[i].required = true;


//Change all input text to uppercase and all inputs text color to blue when the user goes to another input
function changeToUpper()
{ 
    if (uName!=null)
    {
    uName.value = uName.value.toUpperCase();
    uName.setAttribute('style','color:blue;');
    }
    if (namee!=null)
    {
    namee.value = namee.value.toUpperCase();
    namee.setAttribute('style','color:blue;');
    }
    if (email!=null)
    {
    email.value = email.value.toUpperCase();
    email.setAttribute('style','color:blue;');
    }
    
} 

//Check the user if he/she is authenticated using username and password

function success()
{ 
    //The User Name is : "FAWWAZ" and the Password is "123"
    if(uName.value === "FAWWAZ" && pass.value === "123")
    document.getElementById('ss').innerHTML = "Login Successfully :) ";
    else 
    document.getElementById('ss').innerHTML = "Login Failed , Check your entries ."; 
}



