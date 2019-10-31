import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() { }

  performLogin(form: NgForm) {
    this.authSvc.authenticate(form.value['username'], form.value['password']);
    form.resetForm();
    this.router.navigate(['/bgg']);
  }

}
