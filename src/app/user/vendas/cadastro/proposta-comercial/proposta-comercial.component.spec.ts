import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaComercialComponent } from './proposta-comercial.component';

describe('PropostaComercialComponent', () => {
  let component: PropostaComercialComponent;
  let fixture: ComponentFixture<PropostaComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropostaComercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropostaComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
