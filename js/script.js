(function () {
let myEmail = document.getElementById("email");
let myPass = document.getElementById("pass");
let myCheckbox = document.getElementById("checkbox");

const spacePattern = /^\S*$/;
const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

myEmail.addEventListener("blur", function controlEmail(){
    let myError = document.getElementById("ErrEmail");
    if (myEmail.value.length == 0) {
        myError.innerHTML = "Email alanı boş bırakılamaz.";
        return false;
    }else if (!spacePattern.test(myEmail.value)){
        myError.innerHTML = "Emailinizde boşluk bıraktınız..";
        return false;
    }else if(!EmailPattern.test(myEmail.value)){
        myError.innerHTML = "Geçerli bir email adresi giriniz..";
        return false;
    }else{
        myError.innerHTML = "";
        return true;
    }
});
myPass.addEventListener("blur", function controlPass(){
    let myError = document.getElementById("ErrPass");
    if (myPass.value.length == 0) {
        myError.innerHTML = "Şifre alanı boş bırakılamaz.";
        return false;
    }else if (myPass.value.length <= 3){
        myError.innerHTML = "Şifre en az 3 karakter olmalı";
        return false;
    }else if (myPass.value.length >= 10){
        myError.innerHTML = "Şifre en fazla 10 karakter olmalı";
        return false;
    }else if (!spacePattern.test(myPass.value)){
        myError.innerHTML = "Emailinizde boşluk bıraktınız..";
        return false;
    }else{
        myError.innerHTML = "";
        return true;
    }
});


let myForm = document.querySelector(".needs-validation");
myForm.addEventListener("submit", function (e){
    if (!myForm.checkValidity() ||
        !controlEmail() ||
        !controlPass() ){
        e.preventDefault();
        e.stopPropagation();
    }
},false);
})();