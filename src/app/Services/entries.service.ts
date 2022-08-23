import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    this.http.post(this.path + 'Entries/add',entry).subscribe((data:any) =>{
      //this.alertifyService.success("Entry Başarıyla Eklendi");
      this.router.navigateByUrl('/entryDetail/'+data["id"]);
    });

  }
  update(entry:Entry){
    this.http.post(this.path + 'Entries/update',entry).subscribe((data:any) =>{
      //this.alertifyService.success("Entry Başarıyla Güncellendi");
      this.router.navigateByUrl('/entryDetail/'+data["id"]);
    });
  }
  delete(entry:Entry){
    this.http.post(this.path + 'Entries/delete',entry).subscribe((data:any)=>{
      this.router.navigateByUrl('/admin');
    });
    
  }
}
 