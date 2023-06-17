import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegistrarModule } from './registrar/registrar.module';
import { ClienteModule } from './cliente/cliente.module';
import { ComponentsModule } from './components/components.module';
import { FuncionarioModule } from './funcionario/funcionario.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistrarModule,
    ClienteModule,
    ComponentsModule,
    FormsModule,
    FuncionarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
