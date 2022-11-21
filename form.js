var email = document.getElementById('email');
var password = document.getElementById('password');
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var mailformat = /^([a-z0-9_.])+\@([a-z])+\.([a-z])+$/;
var pass = /^((?=.*[0-9])(?=.*[!@#$^&*]).{6,})+$/;
email.addEventListener('textInput',email_verify);
password.addEventListener('textInput',password_verify);
var detailsArray = [];

function validation(){
  if((email.value=="" || !mailformat.test(email.value)) || (password.value=="" || !pass.test(password.value))){
    // alert("please fill email")
    document.getElementById("email_error").innerHTML="*please Enter Email";
    document.getElementById("email_error").style.display="block"
    document.getElementById("pass_error").innerHTML="*please Enter password";
    document.getElementById("pass_error").style.display="block"
    return false;
  }
  return true
}
function email_verify(){
  if(email.value.length>=6 && mailformat.test(email.value) ){
    document.getElementById("email_error").style.display="none";
    // return true;
  }
}

function password_verify(){
  if(password.value.length>=6 && pass.test(password.value) ){
    document.getElementById("pass_error").style.display="none";
  }
}

function details(){
  if(validation()){
    var userDetails = {"email":email.value,"password":password.value};
detailsArray.push(userDetails);
var text = ""
detailsArray.forEach((item)=>{
  text += item.email+"<br>";
  text += item.password;
})
document.getElementById("myList").innerHTML = text;

  }
 
  // document.getElementById("array1").innerHTML = Array.isArray(detailsAraay);
 

}
