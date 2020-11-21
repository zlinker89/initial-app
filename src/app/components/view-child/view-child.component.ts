import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HijoVcComponent } from '../hijo-vc/hijo-vc.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.sass']
})
export class ViewChildComponent implements OnInit {

  @ViewChild(HijoVcComponent, {static: true})
  hijo: HijoVcComponent = new HijoVcComponent();

  @ViewChild('mensaje', { static: true })
  mensaje!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.hijo.saludo('Hola hijo, te saluda tu papá');
    this.mensaje.nativeElement.value = 'hola 2';
  }
}
