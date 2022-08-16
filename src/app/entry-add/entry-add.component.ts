import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../Services/entries.service';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Entry } from '../models/entry';
@Component({
  selector: 'app-entry-add',
  templateUrl: './entry-add.component.html',
  styleUrls: ['./entry-add.component.css'],
  providers:[EntriesService]
})
export class EntryAddComponent implements OnInit {

  constructor(private entryService:EntriesService,
    private formBuilder: FormBuilder) { }
    entry!:Entry;
    entryAddForm!: FormGroup;
    createEntryForm(){
      this.entryAddForm = this.formBuilder.group(
       {header:["",Validators.required],
        body:["",Validators.required] }
      )}
    
  ngOnInit(): void {
    this.createEntryForm();
  }
  add(){
    if(this.entryAddForm.valid){
      this.entry = Object.assign({},this.entryAddForm.value)
      this.entry.userId=1;
      this.entryService.add(this.entry);
    }
  }
}
