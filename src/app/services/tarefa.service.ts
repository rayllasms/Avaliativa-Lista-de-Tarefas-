import { Injectable } from '@angular/core';
import { type ITarefa } from '../models/tarefa.model';

@Injectable({ providedIn: 'root' })
export class TarefaService {
  private tarefas: Array<ITarefa> = [ ];

  listar(): Array<ITarefa> {
    return this.tarefas;
  }

  buscarPorId(id: string): ITarefa | undefined {
    return this.tarefas.find((t) => t.id === id);
  }
  cadastrar(tarefa: ITarefa): void {
    tarefa.id = crypto.randomUUID();
    this.tarefas.push(tarefa);
  }

  editar(tarefa: ITarefa): void {
    const posicao = this.tarefas.findIndex((t) => t.id === tarefa.id);
    if (posicao !== -1) {
      this.tarefas[posicao] = tarefa;
    }
  }

  excluir(id: string): void {
    const posicao = this.tarefas.findIndex((t) => t.id === id);
    if (posicao !== -1) {
      this.tarefas.splice(posicao, 1);
    }
  }


}
