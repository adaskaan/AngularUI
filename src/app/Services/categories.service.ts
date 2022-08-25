import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  path="https://localhost:7176/api/";
  constructor(private http:HttpClient) { }
  add(category:Category){
    this.http.post(this.path + 'Categories/add',category,{ responseType: 'text'}).subscribe((data:any) =>{
      //this.alertifyService.success("Entry Başarıyla Eklendi");
      location.reload();
    });
  }
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.path+"Categories/getall");
  }
}
