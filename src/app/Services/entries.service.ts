import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from '../models/entry';

@Injectable({
  providedIn: 'root'
})
export class EntriesService  {
 path="https://localhost:7176/api/";

  constructor(private http:HttpClient) { }
  getEntries():Observable<Entry[]>{
    return this.http.get<Entry[]>(this.path+"Entries/getall");
  }
  getEntryById(entryId:any):Observable<Entry>{
    return this.http.get<Entry>(this.path+"Entries/detail/?id="+entryId);
  }
  add(entry:Entry){
    this.http.post(this.path + 'Entries/add',entry).subscribe();
  }
}
 