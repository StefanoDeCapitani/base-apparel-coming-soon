var form = document.querySelector("form");
var inputEmail = document.querySelector("input[type=email]")

inputEmail.addEventListener("input", function(){
  inputEmail.classList.remove("invalid");
  form.classList.remove("error");
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if(inputEmail.validity.valid){
    console.log("valid email");
    inputEmail.value = "";
  } else {
    inputEmail.classList.add("invalid");
    form.classList.add("error");
  }
});
