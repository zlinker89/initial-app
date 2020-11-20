import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.sass']
})
export class AtributoComponent implements OnInit {
  desactivado = false;
  titulo = '';
  seleccion = 'Avion';
  constructor() { }

  ngOnInit(): void {
  }

}
