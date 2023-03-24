import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarContaPagarComponent } from './consultar-conta-pagar.component';

describe('ConsultarContaPagarComponent', () => {
  let component: ConsultarContaPagarComponent;
  let fixture: ComponentFixture<ConsultarContaPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarContaPagarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarContaPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
