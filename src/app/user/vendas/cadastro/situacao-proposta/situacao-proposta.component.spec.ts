import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoPropostaComponent } from './situacao-proposta.component';

describe('SituacaoPropostaComponent', () => {
  let component: SituacaoPropostaComponent;
  let fixture: ComponentFixture<SituacaoPropostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituacaoPropostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacaoPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
