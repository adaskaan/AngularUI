import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Route, Router } from '@angular/router';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,private router:Router,private alertifyService:AlertifyService) { }
  path = "http://localhost:7176/api/auth";
  userToken:any;
  decodedToken:any;
  helper = new JwtHelperService();
  login(loginuser:LoginUser){
    let headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    this.httpClient.post(this.path+"login",loginuser,{headers:headers}).subscribe((data:any) =>{
      this.saveToken(data['tokenString'])
      this.userToken=data['tokenString'];
      this.decodedToken= this.helper.decodeToken(data["tokenString"]);
      this.alertifyService.success("Giriş Başarılı");
      this.router.navigateByUrl("/home");
    });
  }
  saveToken(token:any){
    localStorage.setItem("token",token)
  }
}
