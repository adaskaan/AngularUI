import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entry } from '../models/entry';
import { EntriesService } from '../Services/entries.service';
@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css'],
  providers:[EntriesService]
})
export class EntryDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private entryService:EntriesService) { }
  entry! : Entry;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getEntryById(params["entryId"])
    })
  }
  getEntryById(entryId:any){
    this.entryService.getEntryById(entryId).subscribe(data=>{
      this.entry = data;
    })
  }
}
