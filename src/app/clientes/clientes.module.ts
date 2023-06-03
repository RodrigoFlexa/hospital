import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { FormsModule } from '@angular/forms';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClienteAtendimentoComponent } from './cliente-atendimento/cliente-atendimento.component';
import { ClienteAnamneseComponent } from './cliente-anamnese/cliente-anamnese.component';


@NgModule({
  declarations: [
    ClientesFormComponent,
    ClientesListaComponent,
    ClienteAtendimentoComponent,
    ClienteAnamneseComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports: [
    ClientesFormComponent,
    ClientesListaComponent
  ]
})
export class ClientesModule { }
