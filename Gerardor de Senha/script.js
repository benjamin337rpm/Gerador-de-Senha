
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector ("#button");

let sizepassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector ("#container-password")

let charset = "abcdefgijklmnopqrstuvwxyzABCDEFGHIJKLMNOPORSTUVWXYZ0123456789!@";
let novaSenha = "";


sizepassword.innerHTML = sliderElement.value

slider.oninput = function () {
    sizepassword.innerHTML = this.value
}

function generatePassword(){
    let pass = "";

    for(let i = 0, n = charset.length; i <sliderElement.value; ++i){
      pass += charset.charAt(Math.floor(Math.random() *n));
      
    }
    containerPassword.classList.remove("hide");
     password.innerHTML = pass;
}