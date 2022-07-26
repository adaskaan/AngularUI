import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntriesService  {
 // this.http.get("localhost:7225:/api/entries/getEntries").subsxribe
  getEntries(){
    return []//this.http.get();
  }
  constructor(private http:HttpClient) { }
}
 