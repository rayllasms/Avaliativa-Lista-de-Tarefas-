import { Component, inject } from '@angular/core';
import { NgFor, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';
import { type ITarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-home',
  imports: [NgFor, DatePipe, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private tarefaService = inject(TarefaService);

  hoje = new Date();
  tarefas: Array<ITarefa> = this.tarefaService.listar();

  deletar(id: string): void {
    this.tarefaService.excluir(id);
  }
}
