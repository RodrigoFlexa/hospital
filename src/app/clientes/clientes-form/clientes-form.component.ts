import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente


  @Output() cancelado = new EventEmitter();
  @Output() salvo = new EventEmitter<Cliente>();

  constructor() {
    this.cliente = new Cliente()
  }
  cancelar() {
    this.cancelado.emit();
  }

  salvar() {
    this.salvo.emit(this.cliente);
  }

  ngOnInit(): void {
  }
}
