import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarContaReceberComponent } from './consultar-conta-receber.component';

describe('ConsultarContaReceberComponent', () => {
  let component: ConsultarContaReceberComponent;
  let fixture: ComponentFixture<ConsultarContaReceberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarContaReceberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarContaReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
