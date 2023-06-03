import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrarService } from '../services/registrar.service';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})


export class RegistrarComponent implements OnInit{

  @ViewChild('formRegistro') formRegistro!: NgForm; 
  

  public email:string = '';
  public cpf:string ='';
  public nome:string = '';
  public telefone:string ='';
  public Cep:any = {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
  };

  constructor(private route: Router, private registrarService: RegistrarService){}

  ngOnInit(): void {
    
  }

  registrar(form:any):void{
    if(!this.validarCpf()){
      alert('cpf invalido');
      return
    }

    if(!this.validateEmail()){
      alert('email invalido');
      return;
    }

    if(!this.validarTelefone()){
      alert('Telefone com valores incorretos');
      return;
    }

    if(this.formRegistro.form.valid){
      alert('registro concluido');
      this.route.navigate(["/login"]);
    }
  }

  validarTelefone():boolean{
    this.telefone = this.telefone.replace(/[^0-9]/g, "");
    if (isNaN(parseInt(this.telefone))) return false;
    return this.registrarService.validarTelefone(this.telefone);
  }

  validateEmail():boolean{
    return this.registrarService.validarEmail(this.email);
  }

 

  async pesquisacep(cep:string){
    if(cep){
      let result = await this.registrarService.pesquisaCep(cep);
      if(result){
        this.Cep.logradouro = result.logradouro;
        this.Cep.complemento = result.complemento;
        this.Cep.bairro = result.bairro;
        this.Cep.localidade = result.localidade;
        this.Cep.uf = result.uf;
      }else{
        alert("Cep não encontrado");
      }
      console.log(this.Cep)
    }else{
      return
    }

  }

  validarCpf():boolean{
    this.cpf = this.cpf.replace(/[^0-9]/g, ""); //retira os caracteres especiais
    return this.registrarService.validarCpf(this.cpf);
  }


 //mascaras
  mask_telefone():void{
    this.telefone = this.telefone.replace(/[^0-9]/g, "");
    this.telefone = this.telefone.replace(/(\d{2})/, '($1) ');
    this.telefone = this.telefone.replace(/(\d{5})(\d)/, '$1-$2');
  }

  msk_cep():void{
    if(!this.Cep.cep) this.Cep.cep = "";
    this.Cep.cep = this.Cep.cep.replace(/D/g,'');
    this.Cep.cep = this.Cep.cep.replace(/(\d{5})(\d)/, '$1-$2');
  }
  mask_cpf():void{
    if(!this.cpf) this.cpf = "";
    this.cpf = this.cpf.replace(/[^0-9]/g, "");
    this.cpf = this.cpf.replace(/(\d{3})(\d)/, '$1.$2');
    this.cpf = this.cpf.replace(/(\d{3})(\d)/, '$1.$2');
    this.cpf = this.cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

}
