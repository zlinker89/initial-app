import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/interfaces/UserResponse';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.sass']
})

export class PadreComponent implements OnInit {
  Usuarios: UserResponse[] = [];
  constructor(
    private userSerice: UserService
  ) { }

  ngOnInit(): void {
    this.userSerice.getUsuarios()
    .subscribe((datos) => {
      console.log(datos);
      this.Usuarios = datos;
    });
  }
  eliminarUsuario(id: number): void{
    const index: number = this.Usuarios.findIndex(x => x.id === id);
    console.log(index, id);
    this.Usuarios.splice(index, 1);
  }
}
