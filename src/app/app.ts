import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefaService } from './services/tarefa.service';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tarefas-ng');
  private tarefaService = inject(TarefaService);

  constructor() {
    console.log(this.tarefaService.listar());
  }
}
