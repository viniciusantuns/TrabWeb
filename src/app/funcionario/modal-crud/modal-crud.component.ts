import { Component, Input, Output, ViewChild, EventEmitter  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { FuncionarioService } from '../service/funcionario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-crud',
  templateUrl: './modal-crud.component.html',
  styleUrls: ['./modal-crud.component.css']
})
export class ModalCrudComponent {

  @Input() funcionario!: Usuario;
  @Input() acao!: string;
  @Output() salvarFuncionarioEvento = new EventEmitter<Usuario>();
  @Output() editarFuncionarioEvento = new EventEmitter<Usuario>();

  @ViewChild('formFuncionario') formFuncionario! : NgForm; 

  constructor(public activeModal: NgbActiveModal, private funcionarioService: FuncionarioService) {}

  salvar(){
    if(this.formFuncionario.form.valid){
      this.salvarFuncionarioEvento.emit(this.funcionario);
      this.activeModal.close()
    }
  }

  editar(){
    if(this.formFuncionario.form.valid){
      this.salvarFuncionarioEvento.emit(this.funcionario);
      this.activeModal.close()
    }
  }
}
