import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entry';
import { AuthService } from '../Services/auth.service';
import { EntriesService } from '../Services/entries.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  approveList:Entry[]=[]
  constructor(private entriesService:EntriesService,private authService:AuthService) { }

  ngOnInit(): void {
    this.entriesService.getEntries().subscribe(data=>{
      this.GetApproveList(data)
    });
  }
  GetApproveList(arr:Entry[]){
    arr.forEach(entry => {
      if(!entry.isApproved){
        this.approveList.push(entry)
      }
    });
  }
  get isAdmin(){
    return this.authService.IsAdmin;
  }
  approve(entry:Entry){
    entry.isApproved=true;
    this.entriesService.update(entry);
  }
  delete(entry:Entry){
    this.entriesService.delete(entry);
  }
}
