const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


function error(input,message){
    input.classList.add("is-invalid");
    const div=input.nextElementSibling
    div.innerText=message
    div.classList.add("invalid-feedback")

}
function success(input){
       input.classList.add("is-valid");
}
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(email.value)){
    success(email)
   }
   else{
    error(email,"hatalı mail")
   }
}

function checked(inputs){
inputs.forEach(function(input){
  if(input.value===""){
    error(input,`${input.id} gerekli alan`)
  }
  else{
    success(input)
  }
});
}
function checklenght(input,min,max){
   if(input.value.lenght<min){
    
    error(input,`${input.id} en az ${min} karakterli olmalıdır`)
   
  }
   else if(input.value.lenght>max){
    error(input,`${input.id} en fazla ${max} karakterli olmalıdır`)
   }
   else{
    success(input)
   }
} 
function checkPasswords(input1,input2){
  if(input1!==input2){
    error(input2,"parolalar eşleşmiyor")
    error(input1,"")
  }
  else{
    success(input2,"parola doğru")
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
   checked([username,email,password,repassword])
   validateEmail(email)
   checklenght(username,7,14)
   checkPasswords(password,repassword)
  });
