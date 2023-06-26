import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../service/funcionario.service';
import { Pedido } from 'src/app/shared/models/pedido';


@Component({
  selector: 'app-home-funcionario',
  templateUrl: './home-funcionario.component.html',
  styleUrls: ['./home-funcionario.component.css']
})
export class HomeFuncionarioComponent implements OnInit {

  // pedidos!: Pedido[];
  pedidos:Pedido[] = [];
  constructor(private funcionarioService : FuncionarioService){

  }


  ngOnInit(): void {
      this.funcionarioService.listarPedidos("status","Em Aberto", null, null).subscribe(pedidos =>{


      pedidos.forEach(pedido => {
        let ped = new Pedido([],pedido.id, pedido.valorTotal, pedido.status, pedido.data_pedido, pedido.prazo_final);
        this.pedidos.push(ped);

      });

      
    })
  }



}
