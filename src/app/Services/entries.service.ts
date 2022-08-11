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
}
 