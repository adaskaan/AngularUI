import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntriesService  {
 // this.http.get("localhost:7225:/api/entries/getEntries").subsxribe
  getEntries(){
    return [];
  }
  constructor() { }
}
 