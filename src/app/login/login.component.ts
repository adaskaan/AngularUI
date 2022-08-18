import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }
  loginUser:any={};
  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.loginUser);
  }
  logout(){
    this.authService.logout();
  }
}
