import { Component, Input, Output, ViewChild, EventEmitter  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/shared/models/produto.model';
import { FuncionarioService } from '../service/funcionario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.css']
})
export class ModalProdutoComponent {

  @Input() produto!: Produto;
  @Input() acao!: string;

  @Output() salvarProdutoEvento = new EventEmitter<Produto>();
  @Output() editarProdutoEvento = new EventEmitter<Produto>();

  @ViewChild('formProduto') formProduto! : NgForm; 

  constructor(public activeModal: NgbActiveModal, private funcionarioService: FuncionarioService) {}

  salvar(){
    if(this.formProduto.form.valid){
      this.salvarProdutoEvento.emit(this.produto);
      this.activeModal.close()
    }
  }

  editar(){
    if(this.formProduto.form.valid){
      this.salvarProdutoEvento.emit(this.produto);
      this.activeModal.close()
    }
  }
  
}
