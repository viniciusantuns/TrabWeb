const form_login = document.querySelector("#form_login");


form_login.onsubmit = event =>{
    console.log("aqui");
    event.preventDefault();
    var ok = true;
    if(!validateEmail(document.querySelector("#email"))){
        alert("email invalido!");
    }

    if(!ok){
        event.preventDefault();
    }
}



function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
