import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo-vc',
  templateUrl: './hijo-vc.component.html',
  styleUrls: ['./hijo-vc.component.sass']
})
export class HijoVcComponent implements OnInit {
  mensaje = 'hola soy un hijo';
  constructor() { }

  ngOnInit(): void {
  }

  saludo(value: string): void{
    this.mensaje = value;
  }
}
