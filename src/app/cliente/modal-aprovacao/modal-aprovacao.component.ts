import { Component, EventEmitter, Input, Output} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemPedido, Pedido } from 'src/app/shared/models/pedido';
import { ClienteService } from '../services/cliente.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-aprovacao',
  templateUrl: './modal-aprovacao.component.html',
  styleUrls: ['./modal-aprovacao.component.css']
})

export class ModalAprovacaoComponent {

  @Output() salvarPedido = new EventEmitter<Pedido>();
  @Input() pedido!: Pedido;

  constructor(public activeModal: NgbActiveModal) {}

  aprovar(){
    this.pedido.status = "Em Aberto";
    this.salvarPedido.emit(this.pedido);
      this.activeModal.close()
  }

  rejeitar(){
    this.pedido.status = "Cancelado";
    this.salvarPedido.emit(this.pedido);
      this.activeModal.close()
  }


  
}
