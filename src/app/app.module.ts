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
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { HomeFuncionarioComponent } from './funcionario/home-funcionario/home-funcionario.component';
import { ListaPedidosFuncionarioComponent } from './funcionario/lista-pedidos-funcionario/lista-pedidos-funcionario.component';
import { ProdutoComponent } from './funcionario/produto/produto.component';
import { FuncionariosComponent } from './funcionario/funcionarios/funcionarios.component';



@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    HomeFuncionarioComponent,
    ListaPedidosFuncionarioComponent,
    ProdutoComponent,
    FuncionariosComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistrarModule,
    ClienteModule,
    ComponentsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
