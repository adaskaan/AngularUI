import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../Services/entries.service';
import { Entry } from '../models/entry';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  providers:[EntriesService]
})
export class EntryComponent implements OnInit {
  entries: Entry[] = [];
  constructor(private _entriesService: EntriesService) { }

  ngOnInit(): void {
    this._entriesService.getEntries().subscribe(data=>{
      this.GetApproveList(data);
    });
  }
  GetApproveList(arr:Entry[]){
    arr.forEach(entry => {
      if(entry.isApproved){
        this.entries.push(entry)
      }
    });
  }
}
