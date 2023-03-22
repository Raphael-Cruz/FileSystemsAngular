import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPropostaComponent } from './consulta-proposta.component';

describe('ConsultaPropostaComponent', () => {
  let component: ConsultaPropostaComponent;
  let fixture: ComponentFixture<ConsultaPropostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPropostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
