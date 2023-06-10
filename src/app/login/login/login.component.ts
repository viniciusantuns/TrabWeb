import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { Login } from 'src/app/shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  @ViewChild('formLogin') formLogin! : NgForm; 
  login: Login = new Login();
  loading: boolean = false;
  message!:string;
  
  constructor(private loginService:LoginService,private router:Router, private route: ActivatedRoute){
    if (this.loginService.usuarioLogado){
      console.log("Existe")
      //verificar o tipo de usuario
      this.router.navigate(["/home-cliente"])
    }else{
      console.log(this.loginService)
      console.log("Não existe")
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params['error'];
    })
  }


  logar():void{
    
    if(!this.validateEmail(this.login.email)){
      this.message = 'Email invalido';
      return;
    }

    this.loading = true;

    if(this.formLogin.form.valid){

      this.loginService.login(this.login).subscribe(user =>{
        if(user != null){
          this.loginService.usuarioLogado = user;
          this.loading = false;

          //por enquanto só tá jogando para tela home de cliente
          this.router.navigate(["/home-cliente"])

        }else{
          this.loading = false;
          this.message = "Usuario ou senha Invalidos.";

        }

      })

    }
  }

  validateEmail(email: string | undefined ):boolean{
    if (email){
      var re = /\S+@\S+\.\S+/;
      console.log(re.test(email))
      return re.test(email);

    }else{
      return false;
    }
  }

}
