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
import { ModalFuncionarioComponent } from './modal-funcionario/modal-funcionario.component';

@NgModule({
  declarations: [
    HomeFuncionarioComponent,
    ListaPedidosFuncionarioComponent,
    ProdutoComponent,
    FuncionariosComponent,
    RelatorioComponent,
    ModalProdutoComponent,
    ModalFuncionarioComponent
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
