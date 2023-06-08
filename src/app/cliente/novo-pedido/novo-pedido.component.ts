import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent implements OnInit {

  produtos:any[] = [];
  orcamento:any[] = [];

  quantidade!: number;

  totalOrcamento!: number;

  idProdutoSelecionado!: string;


  constructor(private clienteService: ClienteService){

  }

  ngOnInit(): void {
    this.produtos = this.clienteService.listarProdutos();
  }

  adicionarItem(){
    //{id: 5, nome: "meia", valor: "9",  prazo: 1}
    //produtoSelecionado tem o id do produto;
    let produto = this.produtos.find(p => p.id === parseInt(this.idProdutoSelecionado));
    if(produto){

      //procura dentro do orçamento se já existe, se já atualiza
      if(this.orcamento.find(p=>p.id === produto.id)){
        let item = this.orcamento.find(p=>p.id === produto.id);
        item.quantidade += this.quantidade;

      }else{
        //adiciona
        this.orcamento.push({id:parseInt(produto.id), nome:produto.nome, valor:produto.valor, quantidade: this.quantidade, prazo:produto.prazo});
      }
    }

  }


  removeItem(id:number){
    let item = this.orcamento.find(it => it.id === id);
    if(item){
      this.orcamento = this.orcamento.filter(i => i.id != item.id);
    }


  }




}
