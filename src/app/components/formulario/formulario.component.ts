import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/MustMatch';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {
  signupForm: any;
  submitted = false;

  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signupForm = this.builder.group({
      Nombre: ['', Validators.required],
      Usuario: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmContrasena: ['', Validators.required],
    }, {
      validator: MustMatch('Contrasena', 'confirmContrasena')
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
  }

  onReset(): void {
    this.submitted = false;
    this.signupForm.reset();
  }
}
