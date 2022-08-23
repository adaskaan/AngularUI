import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    this.isAuthenticated;
  }

  logout(){
    this.authService.logout();
    
  }
get isAuthenticated(){
    return this.authService.isAuthenticated;
   
  }
}
