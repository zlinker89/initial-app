import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  nombre = 'Hola';
  contador = 0;
  Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numero = 0;
  constructor() {
    console.log('componente creandose');
  }

  ngOnInit(): void {
    console.log('componente ya creado');
  }

  Saludar(): void{
    this.nombre = 'hola Franklin';
  }

  IncrementarContador(): void{
    this.contador++;
  }

  AddNumber(): void{
    this.Numbers.push(this.numero);
  }

}
