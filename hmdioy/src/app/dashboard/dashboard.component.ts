import { Component, OnInit } from '@angular/core';

export interface Transaction {
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    {nome: 'Jonathan Rodrigues', valor: 172.00},
    {nome: 'Richard Kikawa', valor: 7.00},
    {nome: 'Daniel Williams', valor: 300.00},
    {nome: 'Gabriel Bandeira', valor: 0},
    {nome: 'Dennis Caetano', valor: -25},
    {nome: 'Matheus Domingos Leão Gomes', valor: -15},
  ];

  constructor() { }

  ngOnInit() {
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }
}
