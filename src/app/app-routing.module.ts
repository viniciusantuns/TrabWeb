import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistrarComponent } from './registrar/registrar/registrar.component';
import { HomeClienteComponent } from './cliente/home-cliente/home-cliente.component';
import { ListaPedidosComponent } from './cliente/lista-pedidos/lista-pedidos.component';
import { NovoPedidoComponent } from './cliente/novo-pedido/novo-pedido.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'home-cliente',canActivate:[AuthGuard], data: {role: 'Cliente'},  component: HomeClienteComponent},
  {path: '', pathMatch: 'full', component: LoginComponent },
  {path: 'cliente/pedidos',canActivate:[AuthGuard], data: {role: 'Cliente'}, component: ListaPedidosComponent},
  {path: 'novo-pedido',canActivate:[AuthGuard], data: {role: 'Cliente'}, component: NovoPedidoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
