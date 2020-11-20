import { Component, OnInit } from '@angular/core';
import { UserType, Usuario } from 'src/app/interfaces/UsuarioInterface';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.sass']
})
export class YoutubeComponent {
  user: Usuario[] = [
    {
      ID: 31,
      Nombre: 'Franklin',
      Apellidos: 'Ospino De Luque',
      Email: 'ospi89@hotmail.com',
      Nick: 'ospi89',
      Contrasena: '1234',
      Tipo: UserType.Cliente,
    }
  ];
  constructor() {
    this.mostrar();
  }
  mostrar(): void {
    console.log(this.user);
  }
}
