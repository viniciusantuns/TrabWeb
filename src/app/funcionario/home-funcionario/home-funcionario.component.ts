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
    this.funcionarioService.listarPedidos("Em Aberto").subscribe(pedidos =>{
      // console.log(pedidos);

      pedidos.forEach(pedido => {
        // console.log(pedido);
        let ped = new Pedido([],pedido.id, pedido.valorTotal, pedido.status, pedido.data_pedido, pedido.prazo_final);
        this.pedidos.push(ped);
      });

      
    })
  }



  // listarPedidos(){
  //   // this.funcionarioService
  //   this.funcionarioService.listarPedidos().subscribe(pedidos =>{
  //     console.log(pedidos);
  //     // this.pedidos = 
  //   })
  // }

}
