import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarClienteComponent } from './navbar-cliente/navbar-cliente.component';

import { RouterModule } from '@angular/router';
import { NavbarFuncionarioComponent } from './navbar-funcionario/navbar-funcionario.component';

@NgModule({
  declarations: [
    NavbarClienteComponent,
    NavbarFuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarClienteComponent,
    NavbarFuncionarioComponent
  ]
})
export class ComponentsModule { }
