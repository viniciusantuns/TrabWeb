import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarClienteComponent } from './navbar-cliente/navbar-cliente.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarClienteComponent
  ]
})
export class ComponentsModule { }
