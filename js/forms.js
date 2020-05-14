function checkForm()
{
  var error=false;
  var errorText="";
  var contactName=document.getElementById("contactName");
  var contactEmail=document.getElementById("contactEmail");

  if(contactName.value=="")
  {
    errorText +="imię\n"
    error=true;
  }

  if(contactEmail.value=="")
  {
    errorText +="email\n"
    error=true;
  } else
  {
    var email=contactEmail.value;
    var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
    if(regex.test(email)==false)
    {
      document.getElementById("errorEmail").innerHTML = "Błędny adres email";
      return false;
    }
  }

  if(!error) return true;
    else
    {
      document.getElementById('errorName').className='alert alertdanger';
      document.getElementById('errorEmail').className='alert alertdanger';
      return false;
    }
}


(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();
