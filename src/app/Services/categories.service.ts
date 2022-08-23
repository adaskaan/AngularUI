import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  path="https://localhost:7176/api/";
  constructor(private http:HttpClient) { }
  add(category:Category){
    this.http.post(this.path + 'Categories/add',category).subscribe((data:any) =>{
      //this.alertifyService.success("Entry Başarıyla Eklendi");
      
    });
  
  }
}
