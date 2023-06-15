import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistrarComponent } from './registrar/registrar/registrar.component';
import { HomeClienteComponent } from './cliente/home-cliente/home-cliente.component';
import { ListaPedidosComponent } from './cliente/lista-pedidos/lista-pedidos.component';
import { NovoPedidoComponent } from './cliente/novo-pedido/novo-pedido.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeFuncionarioComponent } from './funcionario/home-funcionario/home-funcionario.component';
import { ListaPedidosFuncionarioComponent } from './funcionario/lista-pedidos-funcionario/lista-pedidos-funcionario.component';
import { ProdutoComponent } from './funcionario/produto/produto.component';
import { FuncionariosComponent } from './funcionario/funcionarios/funcionarios.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'home-cliente',canActivate:[AuthGuard], data: {role: 'Cliente'},  component: HomeClienteComponent},
  {path: '', pathMatch: 'full', component: LoginComponent },
  {path: 'cliente/pedidos',canActivate:[AuthGuard], data: {role: 'Cliente'}, component: ListaPedidosComponent},
  {path: 'novo-pedido',canActivate:[AuthGuard], data: {role: 'Cliente'}, component: NovoPedidoComponent},
  {path: 'home-funcionario',canActivate:[AuthGuard], data: {role: 'Funcionario'},  component: HomeFuncionarioComponent},
  {path: 'funcionario/pedidos',canActivate:[AuthGuard], data: {role: 'Funcionario'}, component: ListaPedidosFuncionarioComponent},
  {path: 'funcionario/produtos',canActivate:[AuthGuard], data: {role: 'Funcionario'}, component: ProdutoComponent},
  {path: 'funcionario/funcionarios',canActivate:[AuthGuard], data: {role: 'Funcionario'}, component: FuncionariosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
