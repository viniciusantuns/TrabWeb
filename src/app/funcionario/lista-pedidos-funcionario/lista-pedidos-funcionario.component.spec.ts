import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidosFuncionarioComponent } from './lista-pedidos-funcionario.component';

describe('ListaPedidosFuncionarioComponent', () => {
  let component: ListaPedidosFuncionarioComponent;
  let fixture: ComponentFixture<ListaPedidosFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPedidosFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPedidosFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
