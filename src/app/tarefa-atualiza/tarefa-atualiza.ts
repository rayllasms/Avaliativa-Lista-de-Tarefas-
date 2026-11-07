import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';
import { createITarefa } from '../models/tarefa.model';

@Component({
  imports: [NgFor, FormsModule],
  selector: 'app-tarefa-atualiza',
  styleUrl: './tarefa-atualiza.css',
  templateUrl: './tarefa-atualiza.html',
})
export class TarefaAtualiza {
  private tarefaService = inject(TarefaService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  tarefa = createITarefa();
  categorias = ['domestico', 'pessoal', 'trabalho'];

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    const encontrada = id ? this.tarefaService.buscarPorId(id) : undefined;

    if (encontrada) {
      this.tarefa = { ...encontrada };
      
    } else {
      this.router.navigate(['/']);
    }
  }

  escolherCategoria(categoria: string): void {
    this.tarefa.categoria = categoria;
  }

  atualizar(): void {
    this.tarefaService.editar(this.tarefa);
    this.router.navigate(['/']);
  }
}
