import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produto } from 'src/app/shared/models/produto.model';
import { FuncionarioService } from '../service/funcionario.service';

import { ModalProdutoComponent } from '../modal-produto/modal-produto.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  
  @ViewChild('formProduto') formProduto! : NgForm; 

  produtos:Produto[] = [];

  produto!: Produto;

  constructor(private funcionarioService: FuncionarioService, private modalService: NgbModal){}
  
  ngOnInit(): void {
      this.produto = new Produto();
      
      this.funcionarioService.listarProdutos().subscribe((produtos: Produto[]) =>{
        
        produtos.forEach(produto => {
          let ped = new Produto(produto.id, produto.nome, produto.valor_unitario, produto.prazo);
          this.produtos.push(ped)
        });
      });
  }


  listarProdutos(){
    this.produtos = [];
    this.funcionarioService.listarProdutos().subscribe((produtos: Produto[]) =>{
      produtos.forEach(produto => {
        let ped = new Produto(produto.id, produto.nome, produto.valor_unitario, produto.prazo);
        this.produtos.push(ped)

      });
    });
  }

  removerProduto(produto: Produto){
    let id = produto.id;
    if(confirm("Deseja realmente remover esse produto?")){
      this.funcionarioService.removerProduto(produto).subscribe((retorno:any) =>{
        this.listarProdutos();
      });
    }
  }

  salvarProduto(produto: Produto){
    this.funcionarioService.inserirNovoProduto(produto).subscribe(retorno => {
        alert("Produto inserido com sucesso");
        this.listarProdutos();
      }
    );
  }


  editarProduto(produto: Produto){
    this.funcionarioService.editarProduto(produto).subscribe({
      next: (retorno:any) => {
      alert("Produto editado com sucesso");
      this.listarProdutos();
    }}
  );
  }

  abrirModalProduto(produto?:Produto) {
    const modalRef = this.modalService.open(ModalProdutoComponent);
    
    if(produto){
      modalRef.componentInstance.produto = {...produto};
      modalRef.componentInstance.acao = "editar";

      modalRef.componentInstance.salvarProdutoEvento.subscribe((produto: Produto) => {
        this.editarProduto(produto);
      });

    }else{
      modalRef.componentInstance.produto = new Produto();
      modalRef.componentInstance.acao = "novo";

      modalRef.componentInstance.salvarProdutoEvento.subscribe((produto: Produto) => {

        this.salvarProduto(produto);
      });
    }

  }

}
