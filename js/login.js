const form_login = document.querySelector("#form_login");


form_login.onsubmit = event =>{
    event.preventDefault();
    var ok = true;
    if(!validateEmail(document.querySelector("#email").value)){
        alert("email invalido!");
        ok = false;
    }

    if(ok){
        if(document.querySelector("#email").value == 'cliente@cliente.com'){
            window.location.href = "./index.html";
        }else if(document.querySelector("#email").value == 'funcionario@funcionario.com'){
            window.location.href = "./index_funcionario.html";
        }
    }
}



function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
