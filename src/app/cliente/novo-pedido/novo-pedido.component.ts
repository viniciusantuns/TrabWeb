import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Produto } from 'src/app/shared/models/produto.model';

class ItemPedido extends Produto {
  constructor(
    id: number,
    nome: string,
    valor: number,
    prazo: number,
    public quantidade: number
  ) {
    super(id, nome, valor, prazo);
  }
}

class Orcamento{
  constructor(
    public lista:ItemPedido[] = [],
    public valorTotal?: number,
    public prazo_final?: number
  ){}
}


@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})


export class NovoPedidoComponent implements OnInit {

  produtos:Produto[] = [];
  orcamento:Orcamento = new Orcamento();

  quantidade!: number;

  produto!: string;

  constructor(private clienteService: ClienteService){

  }

  ngOnInit(): void {
    this.produtos = this.clienteService.listarProdutos();
  }

  adicionarItem() {

    let prod: Produto | undefined = this.produtos.find(p => p.id === parseInt(this.produto));
  
    if (prod) {
      
      if (this.orcamento.lista.find(p =>p.id === prod?.id)) { //se tem o produto na lista
          let item = this.orcamento.lista.find(p => p.id === prod?.id);

          if (item){
            item.quantidade += this.quantidade;

          }
        
      }else{
        let itemOrcamento = new ItemPedido(prod.id, prod.nome, prod.valor, prod.prazo, this.quantidade);
        this.orcamento.lista.push(itemOrcamento);

      }
      
    }
    
  }

  removeItem(id:number){
    let item = this.orcamento.lista.find(p => p.id === id);
    if(item){
      this.orcamento.lista = this.orcamento.lista.filter(i => i.id != item?.id)
    }

  }


}
