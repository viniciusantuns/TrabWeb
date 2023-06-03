import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor() { }

  async pesquisaCep(cep:string){
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let dados = await response.json();
    return dados;
  }

  validarTelefone(telefone:string){
    if(telefone.length != 11){
      return false;
    }else{
      return true;
    }
  }

  validarEmail(email:string){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
 
  vldPrimeiroDigito(cpf:string) {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (10 - i);
    }
    const resto = (sum * 10) % 11;
    if (resto < 10) {
      return cpf[9] == resto.toString();
    }
    return cpf[9] == '0';
  }
  
  vldSegundoDigito(cpf:string) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf[i]) * (11 - i);
    }
    const resto = (sum * 10) % 11;
    if (resto < 10) {
      return cpf[10] == resto.toString();
    }
    return cpf[10] == '0';
  }
  
  vldRepetido(cpf:string) {
    const primeiro = cpf[0];
    let diferente = false;
    for(let i = 1; i < cpf.length; i++) {
      if(cpf[i] != primeiro) {
        diferente = true;
      }
    }
    return diferente;
  }
  
  validarCpf(cpf:string) {
    if (cpf.length != 11) {
      return false;
    }
    if(!this.vldRepetido(cpf)) {
      return false;
    }
    if (!this.vldPrimeiroDigito(cpf)) {
      return false;
    }
    if (!this.vldSegundoDigito(cpf)) {
      return false;
    }
    return true;
  }

}
