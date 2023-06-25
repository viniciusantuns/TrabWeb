import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ClienteService } from './services/cliente.service';
import { RouterModule } from '@angular/router';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { FormsModule } from '@angular/forms';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';
import { ModalAprovacaoComponent } from './modal-aprovacao/modal-aprovacao.component';


@NgModule({
  declarations: [
    HomeClienteComponent,
    ListaPedidosComponent,
    NovoPedidoComponent,
    ModalAprovacaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
