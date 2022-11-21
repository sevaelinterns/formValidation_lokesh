
  // var username =  document.getElementById("user").value;
  // var password = document.getElementById("pass").value;
  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

var valueEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
var regName = /\d+$/g;  

// function validateForm(){ 
//   if(username=="" || password==""){
//       document.getElementById("uname").style.color="red";
//       document.getElementById("user").style.border="2px solid red";
//       document.getElementById("passd").style.color="red";
//       document.getElementById("pass").style.border="2px solid red";
//       // username.focus();
//   }
//   if (password.length>6){
//     document.getElementById("error").innerHTML="Enter Six chracters or numbers";
//   }
//   }
function validateForm(){
if (username == "" || regName.test(username)) {
  // window.alert("Please enter your name properly.");
  document.getElementById("error").innerHTML="*please Enter username"
  username.focus();
  return false;
}
      
if (password == "") {
  alert("Please enter your password");
  // document.getElementById("error1").innerHTML="*please Enter password "
  password.focus();
  return false;
}

if(password.length <6){
  alert("Password should be atleast 6 character long");
  // document.getElementById("er").innerHTML="Password should be atleast 6 character long"
  password.focus();
  return false;

}
return true;
}

// else if(username.length==10){

// }
// }

// function validateForm(){
//   debugger
//   var username =  document.getElementById("user").value;
//   var password = document.getElementById("pass").value;
//   var details = {username,password};
//   document.getElementById("h").innerHTML="User Name is:"+details.username;
//   document.getElementById("h1").innerHTML="password is:"+details.password;
//   const total=[];
//   total.push(details.username + details.password);
//   document.getElementById("h3").innerHTML=total;
// document.getElementById("h4").innerHTML=Array.isArray(total) ;

// }
{/* <script>
document.getElementById("h").addEventListener("click", function(){
   console.log(document.getElementById("h").value.length)
  document.getElementById("h").style.backgroundColor = "red";
});
</script> */}
// alert("hellow");
var form = document.getElementById('form')
var name = document.forms.myform.emailInput.value
form.addEventListener("click",(e)=>{
  console.log("hi")
     e.preventDefault();
     
})