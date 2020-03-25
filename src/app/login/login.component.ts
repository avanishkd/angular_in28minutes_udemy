import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'avanish'
  password = ''
  errormsg = 'Invalid Credentials!'
  invalidLogin = false
  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    if (this.username === 'Avanish' && this.password === '12345') {
      this.invalidLogin = false
      this.router.navigate(['welcome',this.username])
    } else { this.invalidLogin = true }

  }

}
