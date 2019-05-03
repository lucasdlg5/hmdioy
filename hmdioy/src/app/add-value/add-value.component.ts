import { Component, OnInit } from '@angular/core';

export interface MovimentoCobranca {
  posicao: number;
  valor: number;
  descricao: string;
  data_movimento: string;
}


const ELEMENT_DATA: MovimentoCobranca[] = [
  {posicao: 1, valor: 100.00, descricao: 'Presente de Aniversario Lucas', data_movimento: '05/05/2019'},
];
@Component({
  selector: 'app-add-value',
  templateUrl: './add-value.component.html',
  styleUrls: ['./add-value.component.css']
})
export class AddValueComponent implements OnInit {
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
