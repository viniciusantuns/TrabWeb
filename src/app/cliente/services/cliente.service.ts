import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  pedidos = [
    { id_pedido: "1", status_pedido: "Cancelado", dt_pedido: "11/04/2023", valor_pedido: "100,00", prazo_pedido: 10},
    { id_pedido: "2", status_pedido: "Aguardando Pagamento", dt_pedido: "01/05/2023",  valor_pedido: "200,00" , prazo_pedido: 10 },
    { id_pedido: "3", status_pedido: "Aguardando Pagamento", dt_pedido: "31/03/2023", valor_pedido: "75,00", prazo_pedido: 10 },
    { id_pedido: "4", status_pedido: "Em aberto", dt_pedido: "31/03/2022",  valor_pedido: "103,00", prazo_pedido: 10 },
    { id_pedido: "5", status_pedido: "Pago", dt_pedido: "02/03/2022", valor_pedido: "110,00" , prazo_pedido: 10},
    { id_pedido: "6", status_pedido: "Finalizado", dt_pedido: "30/02/2022", valor_pedido: "203,00", prazo_pedido: 10}
  ];

  produtos = [
    {id: 1, nome: "camiseta", valor: "10", prazo: 1},
    {id: 2, nome: "camisa", valor: "20",  prazo: 3},
    {id: 3, nome: "calcas", valor: "12",  prazo: 2},
    {id: 4, nome: "cueca", valor: "15",  prazo: 1},
    {id: 5, nome: "meia", valor: "9",  prazo: 1}
  ];  

 

  constructor() { }


  listarPedidosHome(){
    return this.pedidos.filter(pedido => pedido.status_pedido === 'Em aberto');
  }

  listarPedidos(status:string = ""){
    if (status != ""){
      return this.pedidos.filter(pedido => pedido.status_pedido === status);
    }
    return this.pedidos;
  }

  cancelarPedido(id_pedido:number){
    let pedido:any = this.pedidos.find(p => p.id_pedido === id_pedido.toString());

    if(pedido){
      if(confirm("Realmente deseja cancelar o pedido?")){
        pedido.status_pedido = "Cancelado";
      }
    }
  }

  pagarPedido(id_Pedido:number){
    let ped = this.pedidos.find(p => p.id_pedido === id_Pedido.toString());

    if(ped){
      ped.status_pedido = "Pago";
    }
    
  }



  listarProdutos(){
    return this.produtos;
  }




}
