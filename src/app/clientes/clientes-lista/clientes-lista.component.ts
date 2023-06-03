import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../clientes';
import { Router } from '@angular/router';
import $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit, AfterViewInit {

  clientesFiltrados: Cliente[] = [];
  filtro: string = '';
  clienteHovered: number = -1;

  clientes: Cliente[] = [
    {
      id: 1,
      tutor: "João",
      nome_do_pet: "Rex",
      especie: "Cachorro",
      raca: "Golden Retriever",
      idade: 3,
      telefone: "123456789"
    },
    {
      id: 2,
      tutor: "Maria",
      nome_do_pet: "Mimi",
      especie: "Gato",
      raca: "Persa",
      idade: 2,
      telefone: "987654321"
    },
    {
      id: 3,
      tutor: "Pedro",
      nome_do_pet: "Max",
      especie: "Cachorro",
      raca: "Labrador",
      idade: 4,
      telefone: "456789123"
    },
    {
      id: 4,
      tutor: "Ana",
      nome_do_pet: "Bella",
      especie: "Cachorro",
      raca: "Poodle",
      idade: 5,
      telefone: "987654321"
    },
    {
      id: 5,
      tutor: "Carlos",
      nome_do_pet: "Tom",
      especie: "Gato",
      raca: "Siamês",
      idade: 3,
      telefone: "123456789"
    },
    // Adicione os demais clientes aqui
    {
      id: 6,
      tutor: "Lucas",
      nome_do_pet: "Charlie",
      especie: "Cachorro",
      raca: "Bulldog",
      idade: 2,
      telefone: "987654321"
    },
    {
      id: 7,
      tutor: "Mariana",
      nome_do_pet: "Luna",
      especie: "Gato",
      raca: "Persa",
      idade: 1,
      telefone: "123456789"
    },
    {
      id: 8,
      tutor: "Fernanda",
      nome_do_pet: "Mel",
      especie: "Cachorro",
      raca: "Shih Tzu",
      idade: 3,
      telefone: "987654321"
    },
    {
      id: 9,
      tutor: "Rodrigo",
      nome_do_pet: "Rocky",
      especie: "Cachorro",
      raca: "Pitbull",
      idade: 4,
      telefone: "123456789"
    },
    {
      id: 10,
      tutor: "Juliana",
      nome_do_pet: "Mia",
      especie: "Gato",
      raca: "Maine Coon",
      idade: 2,
      telefone: "987654321"
    },
    {
      id: 11,
      tutor: "Gabriel",
      nome_do_pet: "Toby",
      especie: "Cachorro",
      raca: "Beagle",
      idade: 3,
      telefone: "123456789"
    },
    {
      id: 12,
      tutor: "Laura",
      nome_do_pet: "Nina",
      especie: "Gato",
      raca: "Sphynx",
      idade: 1,
      telefone: "987654321"
    },
    {
      id: 13,
      tutor: "Rafael",
      nome_do_pet: "Max",
      especie: "Cachorro",
      raca: "Bulldog Francês",
      idade: 2,
      telefone: "123456789"
    },
    {
      id: 14,
      tutor: "Isabela",
      nome_do_pet: "Lola",
      especie: "Gato",
      raca: "Persa",
      idade: 4,
      telefone: "987654321"
    },
    {
      id: 15,
      tutor: "André",
      nome_do_pet: "Fred",
      especie: "Cachorro",
      raca: "Labrador",
      idade: 5,
      telefone: "123456789"
    },
    {
      id: 16,
      tutor: "Camila",
      nome_do_pet: "Mia",
      especie: "Gato",
      raca: "Siamês",
      idade: 3,
      telefone: "987654321"
    },
    {
      id: 17,
      tutor: "Gustavo",
      nome_do_pet: "Rex",
      especie: "Cachorro",
      raca: "Rottweiler",
      idade: 2,
      telefone: "123456789"
    },
    {
      id: 18,
      tutor: "Amanda",
      nome_do_pet: "Luna",
      especie: "Gato",
      raca: "Persa",
      idade: 1,
      telefone: "987654321"
    },
    {
      id: 19,
      tutor: "Pedro",
      nome_do_pet: "Nina",
      especie: "Cachorro",
      raca: "Golden Retriever",
      idade: 4,
      telefone: "123456789"
    },
    {
      id: 20,
      tutor: "Larissa",
      nome_do_pet: "Bella",
      especie: "Gato",
      raca: "Maine Coon",
      idade: 3,
      telefone: "987654321"
    }
  ];


  constructor(private router: Router) {}


  atendimento(cliente: Cliente) {
    this.router.navigate(['/cliente', cliente.id], { state: { cliente } });
  }

  adicionarCliente() {
    // Lógica para adicionar um novo cliente
  }

  ngOnInit(): void {
  }

  @ViewChild('dataTable', { static: false }) table: any;

  ngAfterViewInit() {
    $(document).ready(() => {
      this.table = $(this.table.nativeElement);
      this.table.DataTable({
        language: {
          emptyTable: 'Nenhum dado disponível na tabela',
          info: '',
          infoEmpty: 'Mostrando 0 até 0 de 0 entradas',
          infoFiltered: '(filtrado de _MAX_ entradas totais)',
          lengthMenu: 'Exibir _MENU_ entradas',
          loadingRecords: 'Carregando...',
          processing: 'Processando...',
          search: 'Pesquisar:',
          zeroRecords: 'Nenhum registro encontrado',
          paginate: {
            first: 'Primeiro',
            last: 'Último',
            next: 'Próximo',
            previous: 'Anterior'
          },
          aria: {
            sortAscending: ': Ordenar colunas de forma ascendente',
            sortDescending: ': Ordenar colunas de forma descendente'
          }
        }
      });
    });
  }
}
