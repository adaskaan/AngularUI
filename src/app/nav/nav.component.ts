import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService) { }
  ngOnInit(): void {
  }

get isAuthenticated(){
  if(this.authService.loggedIn()==null){
    return false;
  }else{
    return this.authService.loggedIn();
  }
   
  }
}
