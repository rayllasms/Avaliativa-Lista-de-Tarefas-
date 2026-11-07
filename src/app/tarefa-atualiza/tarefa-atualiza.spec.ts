import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarefaAtualiza } from './tarefa-atualiza';

describe('TarefaAtualiza', () => {
  let component: TarefaAtualiza;
  let fixture: ComponentFixture<TarefaAtualiza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaAtualiza],
    }).compileComponents();

    fixture = TestBed.createComponent(TarefaAtualiza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
