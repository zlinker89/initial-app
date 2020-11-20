import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.sass']
})
export class SubjectsComponent implements OnInit {
  private numeroSubject: Subject<number> = new Subject();
  numero = 0;
  constructor() {
    this.numeroSubject.subscribe(n => {
      this.numero = n;
    });
  }

  ngOnInit(): void {
  }

  siguiente(): void{
    const valor = Math.floor((Math.random() * 100) + 1);
    this.numeroSubject.next(valor);
  }

  completar(): void{
    this.numeroSubject.complete();
  }

}
