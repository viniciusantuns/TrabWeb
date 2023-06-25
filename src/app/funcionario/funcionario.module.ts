import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ProdutoComponent } from './produto/produto.component';
import { HomeFuncionarioComponent } from './home-funcionario/home-funcionario.component';
import { ListaPedidosFuncionarioComponent } from './lista-pedidos-funcionario/lista-pedidos-funcionario.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { FuncionarioService } from './service/funcionario.service';
import { ModalProdutoComponent } from './modal-produto/modal-produto.component';
import { CrudFuncionarioComponent } from './crud-funcionario/crud-funcionario.component';
import { ModalCrudComponent } from './modal-crud/modal-crud.component';

@NgModule({
  declarations: [
    HomeFuncionarioComponent,
    ListaPedidosFuncionarioComponent,
    ProdutoComponent,
    FuncionariosComponent,
    RelatorioComponent,
    ModalProdutoComponent,
    CrudFuncionarioComponent,
    ModalCrudComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule
  ],
  providers: [
    FuncionarioService
  ]
})

export class FuncionarioModule {

}
