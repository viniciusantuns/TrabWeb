import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produto } from 'src/app/shared/models/produto.model';

import { FuncionarioService } from '../service/funcionario.service';




@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  
  @ViewChild('formProduto') formProduto! : NgForm; 

  produtos:Produto[] = [];

  produto!: Produto;

  constructor(private funcionarioService: FuncionarioService){}
  
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





}
