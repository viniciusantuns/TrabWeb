import { Component, ViewChild, ViewRef } from '@angular/core';
import { FuncionarioService } from '../service/funcionario.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCrudComponent } from '../modal-crud/modal-crud.component';

@Component({
  selector: 'app-crud-funcionario',
  templateUrl: './crud-funcionario.component.html',
  styleUrls: ['./crud-funcionario.component.css']
})
export class CrudFuncionarioComponent {

  @ViewChild('formFuncionario') formFuncionario! : NgForm;

  funcionarios: Usuario[] = [];
  funcionario!: Usuario;

  constructor(private funcionarioService: FuncionarioService, private modalService: NgbModal ) {}
  
  ngOnInit(): void {
    this.funcionario = new Usuario();
    this.funcionarioService.listarFuncionarios().subscribe((funcionarios: Usuario[]) => {
      funcionarios.forEach(funcionario => {
        let fun = new Usuario(funcionario.id, funcionario.nome, funcionario.email, funcionario.perfil, funcionario.senha);
        this.funcionarios.push(fun);
      });
    });
  } 
  
  listarFuncionarios() {
    this.funcionarios = [];
    this.funcionarioService.listarFuncionarios().subscribe((funcionarios: Usuario[]) => {
      funcionarios.forEach(funcionario => {
        let fun = new Usuario(funcionario.id, funcionario.nome, funcionario.email, funcionario.perfil, funcionario.senha);
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
  
  editarFuncionario() {
    this.funcionarioService.editarFuncionario(this.funcionario).subscribe({
      next: (retorno: any) => {
        alert("Funcionário alterado com sucesso");
        this.listarFuncionarios();
      }
    });
  }
    abrirModalFuncionario(funcionario?: Usuario){
        const modalRef = this.modalService.open(ModalCrudComponent);
      console.log(funcionario);
      if(funcionario){
          let func = new Usuario(funcionario.id, funcionario.nome, funcionario.email, funcionario.perfil,funcionario.senha);
          modalRef.componentInstance.funcionario = func;
          modalRef.componentInstance.acao = "editar";

          modalRef.componentInstance.salvarFuncionarioEvento.subscribe((funcionario: Usuario) => {
            this.editarFuncionario();
        });
      }
      
      else{
        console.log("entrou no else");
        modalRef.componentInstance.funcionario = new Usuario();
        modalRef.componentInstance.acao = "novo";
        
        modalRef.componentInstance.salvarFuncionarioEvento.subscribe((funcionario: Usuario) => {
        this.salvarFuncionario(funcionario);
      });
    }
    
  }
}
