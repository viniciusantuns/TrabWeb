import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Produto } from 'src/app/shared/models/produto.model';
import { Pedido, ItemPedido } from 'src/app/shared/models/pedido';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAprovacaoComponent } from '../modal-aprovacao/modal-aprovacao.component';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent implements OnInit {

  produtos:Produto[] = [];
  orcamento:Pedido = new Pedido();

  quantidade!: number;

  produto!: string;

  constructor(private clienteService: ClienteService, private modalService: NgbModal){

  }

  ngOnInit(): void {
    this.clienteService.listarProdutos().subscribe((produtos: Produto[]) =>{
      this.produtos = produtos
    })
    
  }

  adicionarItem() {

    let prod: Produto | undefined = this.produtos.find(p => p.id === parseInt(this.produto));
  
    if (typeof(prod) != undefined) {
      
      if (this.orcamento.lista.find(p =>p.id === prod?.id)) { //se tem o produto na lista
          let item = this.orcamento.lista.find(p => p.id === prod?.id);

          if (item !== undefined){
            if(item.quantidade == undefined){
              item.quantidade = this.quantidade;
            }else{
              item.quantidade += this.quantidade;
            }
            
          }
        
      }else{
        if(prod && prod.id && prod.nome && prod.valor_unitario && prod.prazo){
          let itemOrcamento = new ItemPedido(prod?.id, prod?.nome, prod?.valor_unitario, prod?.prazo, this.quantidade );
          this.orcamento.lista.push(itemOrcamento);
        }
      }
      
    }
    
  }

  removeItem(id:number | undefined){
    if (id !== undefined){
      let item = this.orcamento.lista.find(p => p.id === id);
      if(item){
        this.orcamento.lista = this.orcamento.lista.filter(i => i.id != item?.id)
      }
    }
  }

  salvarPedido(pedido:Pedido){
    this.clienteService.salvarPedido(pedido).subscribe(retorno => {alert(retorno)});
  }


  abrirModalProduto() {
    const modalOrcamento = this.modalService.open(ModalAprovacaoComponent);
    this.orcamento.calcularValores();

    modalOrcamento.componentInstance.pedido = this.orcamento;

    modalOrcamento.componentInstance.salvarPedido.subscribe((pedido: Pedido) => {
      this.salvarPedido(pedido);
    });

  }

}
