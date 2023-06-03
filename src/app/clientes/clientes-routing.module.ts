import { ClienteAtendimentoComponent } from './cliente-atendimento/cliente-atendimento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [
  {path:'clientes-form',component:ClientesFormComponent},
  {path:'clientes-lista',component:ClientesListaComponent},
  {path: 'cliente/:id', component: ClienteAtendimentoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
