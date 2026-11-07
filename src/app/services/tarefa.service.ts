import { Injectable } from '@angular/core';
import { type ITarefa } from '../models/tarefa.model';

@Injectable({ providedIn: 'root' })
export class TarefaService {
  private tarefas: Array<ITarefa> = [];

  listar(): Array<ITarefa> {
    return this.tarefas;
  }
}
