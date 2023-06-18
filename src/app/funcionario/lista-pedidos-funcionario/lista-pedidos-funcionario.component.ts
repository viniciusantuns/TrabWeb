import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../service/funcionario.service';
import { Pedido } from 'src/app/shared/models/pedido';

@Component({
  selector: 'app-lista-pedidos-funcionario',
  templateUrl: './lista-pedidos-funcionario.component.html',
  styleUrls: ['./lista-pedidos-funcionario.component.css']
})
export class ListaPedidosFuncionarioComponent implements OnInit{

  pedidos:Pedido[] = [];
  constructor(private funcionarioService: FuncionarioService){}


  ngOnInit(): void {
    this.funcionarioService.listarPedidos().subscribe(pedidos =>{
      pedidos.forEach(pedido => {
        let ped = new Pedido([],pedido.id, pedido.valorTotal, pedido.status, pedido.data_pedido, pedido.prazo_final);
        this.pedidos.push(ped);
      });
    });
  }


  

}
