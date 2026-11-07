import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarefaNova } from './tarefa-nova';

describe('TarefaNova', () => {
  let component: TarefaNova;
  let fixture: ComponentFixture<TarefaNova>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaNova],
    }).compileComponents();

    fixture = TestBed.createComponent(TarefaNova);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
