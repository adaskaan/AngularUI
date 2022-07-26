import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../Services/entries.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  entries=[];
  constructor(private _entriesService: EntriesService) { }

  ngOnInit(): void {
    this.entries = this._entriesService.getEntries();
  }

}
