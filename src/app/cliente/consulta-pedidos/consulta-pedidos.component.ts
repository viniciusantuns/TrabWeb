import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Pedido } from 'src/app/shared/models/pedido';

@Component({
  selector: 'app-consulta-pedidos',
  templateUrl: './consulta-pedidos.component.html',
  styleUrls: ['./consulta-pedidos.component.css']
})
export class ConsultaPedidosComponent {

  pedido:Pedido[] = [];
  constructor (private clienteService: ClienteService ){}

  ngOnInit(): void {
    this.clienteService.listarPedido().subscribe(pedidos =>{
      pedidos.forEach(pedido => {
        let ped = new Pedido([],pedido.id, pedido.valorTotal, pedido.status, pedido.data_pedido, pedido.prazo_final);
        this.pedido.push(ped);
      });
    });
  }

  confirmarRecolhimento(id_pedido: string): void{
    //this.clienteService.recolherPedido(id_pedido);
    //this.listarPedido(this.status);     
  }

  listarPedido(id_pedido: string){
    this.clienteService.listarPedidos(id_pedido);
  }
}