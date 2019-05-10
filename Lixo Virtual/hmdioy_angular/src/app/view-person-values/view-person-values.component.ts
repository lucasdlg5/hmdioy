import { Component, OnInit } from '@angular/core';


export interface Transaction {
  
  position: number;
  nome: string;
  description: string;
  data: string;
  valor: number;
}

@Component({
  selector: 'app-view-person-values',
  templateUrl: './view-person-values.component.html',
  styleUrls: ['./view-person-values.component.css']
})
export class ViewPersonValuesComponent implements OnInit {

  // displayedColumns = ['position', 'nome', 'description', 'data', 'cost'];
  // transactions: Transaction[] = [
  //   {position: 1, nome: 'Lucas Domingos', description: 'Paguei o Star Geek para o Richard', data: '04/05/1997', valor: 15.00},
  // ];

  pessoas = ['Richard Kikawa'];
  displayedColumns = ['position', 'nome', 'description', 'data', 'cost'];
  transactions: Transaction[] = [
    {position: 1, nome: 'Lucas Domingos Leão Gomes', description: 'Paguei o Star Geek para o Richard', data: '04/05/1997', valor: 15.00},
    {position: 2, nome: 'Richard Kikawa', description: 'Lanche no Semar', data: '07/05/1997', valor: -6.99},
    // {position: 3, nome: 'Richard Kikawa', description: 'Lanche no Semar', data: '07/05/1997', valor: 7},
    // {position: 4, nome: 'Richard Kikawa', description: 'Lanche no Semar', data: '07/05/1997', valor: -6.99},
    // {position: 5, nome: 'Richard Kikawa', description: 'Lanche no Semar', data: '07/05/1997', valor: 10},
    // {position: 6, nome: 'Richard Kikawa', description: 'Lanche no Semar', data: '07/05/1997', valor: 8},
    // {position: 7, nome: 'Richard Kikawa', description: 'Lanche no Semar', data: '07/05/1997', valor: -6.99},
    // {position: 8, nome: 'Richard Kikawa', description: 'Lanche no Semar', data: '07/05/1997', valor: -6.99},
    // {position: 9, nome: 'Richard Kikawa', description: 'Lanche no Semar', data: '07/05/1997', valor: 1},
    // {position: 10, nome: 'Richard Kikawa', description: 'Lanche no Semar', data: '07/05/1997', valor: 3},
  ];

  constructor() { }

  ngOnInit() {
  }

  getTotalCost() {
    return this.transactions.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }

}
