import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../models/registerUser';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }
  registerUser:any = {};
  ngOnInit(): void {
  }
  register(){
    this.authService.register(this.registerUser);
  }

}
