import { Component, ViewChild, ViewRef } from '@angular/core';
import { FuncionarioService } from '../service/funcionario.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFuncionarioComponent } from '../modal-funcionario/modal-funcionario.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent {
  @ViewChild('formFuncionario') formFuncionario! : NgForm;
  
  funcionarios!: Usuario[];
  funcionario!: Usuario;
  
  
  constructor(private funcionarioService: FuncionarioService, private modalService: NgbModal ) {}
  
  
  ngOnInit(): void {
    this.funcionario = new Usuario();
    this.funcionarioService.listarFuncionarios().subscribe((funcionarios1: Usuario[]) => {
      if (this.funcionarios == undefined){
          this.funcionarios = []
      }
      funcionarios1.forEach(funcionario => {
        let fun = new Usuario(funcionario.id, funcionario.nome, funcionario.email, funcionario.senha, funcionario.data_nascimento);
        this.funcionarios.push(fun);
      });
    });
  } 
  
  listarFuncionarios() {
    this.funcionarios = [];
    this.funcionarioService.listarFuncionarios().subscribe((funcionarios: Usuario[]) => {
      funcionarios.forEach(funcionario => {
        let fun = new Usuario(funcionario.id, funcionario.nome, funcionario.email, funcionario.senha, funcionario.data_nascimento);
        this.funcionarios.push(fun);
      });
    });
  }
  
  removerFuncionario(funcionario: Usuario) {
    let id = funcionario.id;
    if (confirm("Deseja realmente remover esse funcionário?")) { 
      this.funcionarioService.removerFuncionario(funcionario).subscribe((retorno: any) => {
        this.listarFuncionarios();
      });
    }
  }

  salvarFuncionario(funcionario: Usuario) {
    
    this.funcionarioService.inserirFuncionario(funcionario).subscribe(retorno => {
      alert("Funcionário cadastrado com sucesso");
      this.listarFuncionarios();
    });
  }
  
  editarFuncionario(funcionario: Usuario) {
    this.funcionarioService.editarFuncionario(funcionario).subscribe({
      next: (retorno: any) => {
        alert("Funcionário alterado com sucesso");
        this.listarFuncionarios();
      }
    });
  }
    abrirModalFuncionario(funcionario?: Usuario){
        const modalRef = this.modalService.open(ModalFuncionarioComponent);

      if(funcionario){
          let func = new Usuario(funcionario.id, funcionario.nome, funcionario.email, funcionario.senha, funcionario.data_nascimento);
          modalRef.componentInstance.funcionario = func;

          modalRef.componentInstance.acao = "editar";
          
          modalRef.componentInstance.salvarFuncionarioEvento.subscribe((funcionario: Usuario) => {
            this.editarFuncionario(funcionario);
        });
      }
      
      else{
        modalRef.componentInstance.funcionario = new Usuario();
        modalRef.componentInstance.acao = "novo";
        
        modalRef.componentInstance.salvarFuncionarioEvento.subscribe((funcionario: Usuario) => {
        this.salvarFuncionario(funcionario);
      });
    }
    
  }
}
