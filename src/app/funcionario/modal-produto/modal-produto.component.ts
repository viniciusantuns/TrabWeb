import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/shared/models/produto.model';
import { FuncionarioService } from '../service/funcionario.service';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.css']
})
export class ModalProdutoComponent {

  @Input() produto!: Produto;
  @Input() acao!: string;
  constructor(public activeModal: NgbActiveModal, private funcionarioService: FuncionarioService) {}


  salvar(){

  }

  editar(){

  }
  
}
