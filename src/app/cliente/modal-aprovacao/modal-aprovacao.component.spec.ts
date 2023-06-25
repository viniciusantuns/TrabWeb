import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAprovacaoComponent } from './modal-aprovacao.component';

describe('ModalAprovacaoComponent', () => {
  let component: ModalAprovacaoComponent;
  let fixture: ComponentFixture<ModalAprovacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAprovacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAprovacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
