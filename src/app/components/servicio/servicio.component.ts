import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.sass']
})
export class ServicioComponent implements OnInit {
  user = '';
  password = '';
  constructor(
    private apiService: ApiService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }
  Login(): void{
    this.apiService.login(this.user, this.password).subscribe(response => {
      console.log(response);
      this.userService.user = response;
    });
  }
}
