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
        this.produtos = produtos
      })
  }


  salvarProduto():void{
    if(this.formProduto.form.valid){
      this.funcionarioService.inserirNovoProduto(this.produto);
    }

  }


  abrirModalProduto(produto?:Produto) {
    const modalRef = this.modalService.open(ModalProdutoComponent);
    
    if(produto){
      modalRef.componentInstance.produto = produto;
      modalRef.componentInstance.acao = "editar";
    }else{
      modalRef.componentInstance.produto = new Produto();
      modalRef.componentInstance.acao = "novo";
    }

  }

}
