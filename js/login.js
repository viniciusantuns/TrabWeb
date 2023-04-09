const form_login = document.querySelector("#form_login");


form_login.onsubmit = event =>{
    console.log("aqui");
    var ok = True;
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
