import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePrecoComponent } from './lista-de-preco.component';

describe('ListaDePrecoComponent', () => {
  let component: ListaDePrecoComponent;
  let fixture: ComponentFixture<ListaDePrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDePrecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDePrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
