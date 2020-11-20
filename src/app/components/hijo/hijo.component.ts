import { Component, EventEmitter, Host, Input, OnInit, Output } from '@angular/core';
import { UserResponse } from 'src/app/interfaces/UserResponse';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.sass']
})
export class HijoComponent implements OnInit {

  @Input() data: UserResponse[] = [];
  @Output() eliminarEvent = new EventEmitter<number>();
  constructor(
    @Host() private _app: PadreComponent
  ) { }

  ngOnInit(): void {
  }
  EliminarUsuario(id: number): void{
    // this.eliminarEvent.emit(id);
    this._app.eliminarUsuario(id);
  }
}
