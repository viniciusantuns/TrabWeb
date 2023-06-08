import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})


export class ListaPedidosComponent implements OnInit {
  
  pedidos:any[] = [];

  public status: string = '';

  constructor(private clienteService: ClienteService){

  }

  ngOnInit(): void {
    this.pedidos = this.clienteService.listarPedidos();
    console.log(this.pedidos);
  }

  listaPedidosFiltro(status: string){
    this.pedidos = this.clienteService.listarPedidos(status);
  }

  cancelarPedido(id_pedido: number):void{
    this.clienteService.cancelarPedido(id_pedido);
    this.listaPedidosFiltro(this.status);
  }

  pagarPedido(id_pedido:number): void{
    this.clienteService.pagarPedido(id_pedido);
    this.listaPedidosFiltro(this.status);
  }

}
