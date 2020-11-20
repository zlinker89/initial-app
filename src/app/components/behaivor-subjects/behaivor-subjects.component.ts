import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaivor-subjects',
  templateUrl: './behaivor-subjects.component.html',
  styleUrls: ['./behaivor-subjects.component.sass']
})
export class BehaivorSubjectsComponent implements OnInit {
  private numeroSubject: BehaviorSubject<number> = new BehaviorSubject(0);
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
    console.log(this.numeroSubject.getValue());
    this.numeroSubject.next(valor);
  }

  completar(): void{
    this.numeroSubject.complete();
  }
}
