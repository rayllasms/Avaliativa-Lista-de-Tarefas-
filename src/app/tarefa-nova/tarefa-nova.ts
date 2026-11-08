import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';
import { createITarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-tarefa-nova',
  imports: [FormsModule, NgFor],
  templateUrl: './tarefa-nova.html',
  styleUrl: './tarefa-nova.css',
})
export class TarefaNova {
  private tarefaService = inject(TarefaService);
  private router = inject(Router);

  tarefa = createITarefa();
  categorias = ['domestico', 'pessoal', 'trabalho'];

  constructor() {
    this.tarefa.prioridade = 'Alto';
    this.tarefa.prioridade = 'Médio';
    this.tarefa.prioridade = 'Baixo';
  }

  escolherCategoria(categoria: string): void {
    this.tarefa.categoria = categoria;
  }

  salvar(): void {
  if (!this.tarefa.nome.trim()) {
    return;
  }
  this.tarefaService.cadastrar(this.tarefa);
  this.router.navigate(['/']);
}
}