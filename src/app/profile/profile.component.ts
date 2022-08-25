import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entry';
import { AuthService } from '../Services/auth.service';
import { EntriesService } from '../Services/entries.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  entries: Entry[] = [];
  constructor(private _entriesService: EntriesService,private authService:AuthService) { }

  ngOnInit(): void {
    this._entriesService.getEntries().subscribe(data=>{
      this.GetUserEntries(data);
    });
  }
  GetUserEntries(arr:Entry[]){
    arr.forEach(entry => {
      if(entry.userId==this.UserId){
        this.entries.push(entry)
      }
    });
  }
  get UserId(){
    return this.authService.getCurrentUserId();
  }
  get User(){
    return this.authService.CurrentUserName;
  }
}
