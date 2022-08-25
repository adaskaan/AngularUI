import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Entry } from '../models/entry';
import { AlertifyService } from './alertify.service';
@Injectable({
  providedIn: 'root'
})
export class EntriesService  {
 path="https://localhost:7176/api/";

  constructor(private http:HttpClient, private alertifyService:AlertifyService,private router:Router ) { }
  getEntries():Observable<Entry[]>{
    return this.http.get<Entry[]>(this.path+"Entries/getall");
  }
  getEntryById(entryId:any):Observable<Entry>{
    return this.http.get<Entry>(this.path+"Entries/get/?id="+entryId);
  }
  add(entry:Entry){
    this.http.post(this.path + 'Entries/add',entry, { responseType: 'text'}).subscribe((data:any) =>{
      //this.alertifyService.success("Entry Başarıyla Eklendi");
      
      location.reload()
    });

  }
  update(entry:Entry){
    this.http.post(this.path + 'Entries/update',entry,{ responseType: 'text'}).subscribe((data:any) =>{
      //this.alertifyService.success("Entry Başarıyla Güncellendi");
      location.reload()
    });
  }
  delete(entry:Entry){
    this.http.post(this.path + 'Entries/delete',entry,{ responseType: 'text'}).subscribe((data:any)=>{
      location.reload()
    });
    
    
  }
  getByCategory(id:number):Observable<Entry>{
    return this.http.get<Entry>(this.path+"Entries/getbycategory/?id="+id);
  }
}
 