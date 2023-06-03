import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  @ViewChild('formLogin') formLogin! : NgForm; 
  
  public email:string = '';
  public senha:string = '';
  
  constructor(private router:Router){}

  ngOnInit(): void {
  }

  logar():void{

    if(!this.validateEmail(this.email)){
      alert('email invalido');
      return;
    }
        
    if(this.formLogin.form.valid){
      if(this.email == 'cliente@cliente.com')
        this.router.navigate(["/home-cliente"])
      else 
        alert('Ta errado');
    }
  }

  validateEmail(email:string):boolean{
    var re = /\S+@\S+\.\S+/;
    console.log(re.test(email))
    return re.test(email);
  }

}
