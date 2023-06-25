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

  type: string | null = null;

  dataInicio!:any;
  dataFim!:any;

  constructor(private funcionarioService: FuncionarioService){}


  ngOnInit(): void {
    this.funcionarioService.listarPedidos("todos").subscribe(pedidos =>{
      pedidos.forEach(pedido => {
        let ped = new Pedido([],pedido.id, pedido.valorTotal, pedido.status, pedido.data_pedido, pedido.prazo_final);
        this.pedidos.push(ped);
      });
    });
  }

  
  listarPedidos(){
    if (this.type === 'todos' || this.type === 'hoje') {
      this.pedidos = [];
      this.funcionarioService.listarPedidos(this.type).subscribe(pedidos =>{
        pedidos.forEach(pedido => {
          let ped = new Pedido([],pedido.id, pedido.valorTotal, pedido.status, pedido.data_pedido, pedido.prazo_final);
          this.pedidos.push(ped);
        });
      });

    } else if (this.type === 'data' && this.dataInicio && this.dataFim) {
      this.pedidos = [];
      this.funcionarioService.listarPedidos(this.type, null, this.dataInicio, this.dataFim).subscribe(pedidos =>{
        pedidos.forEach(pedido => {
          let ped = new Pedido([],pedido.id, pedido.valorTotal, pedido.status, pedido.data_pedido, pedido.prazo_final);
          this.pedidos.push(ped);
        });
      });

    }else{
      console.log("Selecione uma data");
      
    }

  }

  verificarCamposData() {
    if (this.dataInicio && this.dataFim) {
      console.log(this.dataInicio)
      console.log(this.dataFim)
      this.listarPedidos();
    }
  }



  atualizarPedido(pedido:Pedido, status: string){
    //fazer a logica para atualizar o pedido e listar os pedidos denovo né
  }


  getStatusClass(status:any): string {
    console.log(status)
    if (status === 'Em Aberto') {
      return 'aberto';

    } else if (status === 'Cancelado') {
      return 'cancelado';

    } else if (status === 'Pago') {
      return 'pago ';

    } else if (status === 'Finalizado') {
      return 'finalizado';

    } else if (status === 'Aguardando Pagamento') {
      return 'aguardando';

    } else if (status === 'Recolhido') {
      return 'recolhido';
    }else{
      return "";
    }
  }
}
