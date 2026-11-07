import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TarefaNova} from './tarefa-nova/tarefa-nova';
import {TarefaAtualiza} from './tarefa-atualiza/tarefa-atualiza';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tarefa-nova', component: TarefaNova },
  { path: 'tarefa-atualiza/:i', component: TarefaAtualiza }
];
