const form_login = document.querySelector("#form_login");


form_login.onsubmit = event =>{
    event.preventDefault();
    var ok = true;
    if(!validateEmail(document.querySelector("#email").value)){
        alert("email invalido!");
        ok = false;
    }

    if(ok){
        console.log("isso")
        window.location.href = "./index.html";
    }
}



function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
