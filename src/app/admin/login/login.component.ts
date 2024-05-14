import { Component } from '@angular/core';
// FormsModule: es utilizado en los formularios con las siguientes funcionalidades para crear, validar y gestionar formularios
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // any: Es un tipo de dato que nos permite asignar un valor a una variable sin errores 
  loginObj: any = {
    userName: "",
    password: ""
  }

  constructor(private router: Router) { }

  onLogin() {
    if (this.loginObj.userName == "admin" && this.loginObj.password == "123qq") {
      this.router.navigateByUrl("/productos")
    } else {
      alert("Credenciales incorrectas")
    }
  }

}
