var t ;
const form = document.querySelector("#registerForm");


form.onsubmit = event =>{
    event.preventDefault();
    var ok = true;
    if(!validarCpf(document.querySelector("#cpf").value)){
        ok = false;
        alert('cpf invalido');
    }
    if(!validateEmail(document.querySelector("#email").value)){
      ok = false;
     alert('email invalido');
    }
    if(!validaTelefone(document.querySelector("#telefone").value)){
      ok = false;
      alert('telefone invalido');
    }

    if(ok){  
      alert("Registro realizado com sucesso");
      window.location.href = "./login.html";
    }
    
}

function validaTelefone(telefone){
  telefone = telefone.replace(/[^0-9]/g,"");
  t = telefone;
  
  if(isNaN(telefone)){
    return false;
  }

  if(telefone.length < 11 || telefone.length > 11){
    return false;
  }

  return true;
}

function validateEmail(email) {
  if (email != '' || email != null){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }else{
    return false;
  }
  
}


//validar cpf
function vldPrimeiroDigito(cpf) {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += cpf[i] * (10 - i);
    }
    const resto = (sum * 10) % 11;
    if (resto < 10) {
      return cpf[9] == resto;
    }
    return cpf[9] == 0;
  }
  
  function vldSegundoDigito(cpf) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += cpf[i] * (11 - i);
    }
    const resto = (sum * 10) % 11;
    if (resto < 10) {
      return cpf[10] == resto;
    }
    return cpf[10] == 0;
  }
  
  function vldRepetido(cpf) {
    const primeiro = cpf[0];
    let diferente = false;
    for(let i = 1; i < cpf.length; i++) {
      if(cpf[i] != primeiro) {
        diferente = true;
      }
    }
    return diferente;
  }
  
  function validarCpf(cpf) {
    cpf= cpf.replace(/[^0-9]/g,"");

    if (cpf.length != 11) {
      return false;
    }
    if(!vldRepetido(cpf)) {
      return false;
    }
    if (!vldPrimeiroDigito(cpf)) {
      return false;
    }
    if (!vldSegundoDigito(cpf)) {
      return false;
    }
    return true;
  }



//consulta cep
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
    document.getElementById('complemento').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('estado').value=(conteudo.uf);
        document.getElementById('complemento').value=(conteudo.complemento);
    } else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

document.getElementById('cep').addEventListener('keyup', function(e){
  if(!this.value) return "";
  this.value=this.value.replace(/[^0-9]/g,"");
  this.value = this.value.replace(/(\d{5})(\d)/,'$1-$2');

})

document.getElementById('telefone').addEventListener('keyup', function(e){
  if(!this.value) return "";
  this.value=this.value.replace(/[^0-9]/g,"");
  this.value=this.value.replace(/(\d{2})(\d)/,"($1) $2");
  this.value=this.value.replace(/(\d{5})(\d)/,"$1-$2");

});

document.getElementById('cpf').addEventListener('keyup',function(event){
    if(!this.value) return "";
    this.value=this.value.replace(/[^0-9]/g,"")
    this.value=this.value.replace(/(\d{3})(\d)/,"$1.$2")
    this.value=this.value.replace(/(\d{3})(\d)/,"$1.$2")
    this.value=this.value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

})

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('estado').value="...";
            document.getElementById('complemento').value="...";
 
            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);
        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

