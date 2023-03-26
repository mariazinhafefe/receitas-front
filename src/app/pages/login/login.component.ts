import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });
  }

  entrar(): void {
    this.router.navigate(["/receitas"]);

  }
}
