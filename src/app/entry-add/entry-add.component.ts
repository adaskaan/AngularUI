import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../Services/entries.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Entry } from '../models/entry';
import { AlertifyService } from '../Services/alertify.service';
import { AuthService } from '../Services/auth.service';
import { Category } from '../models/category';
import { CategoriesService } from '../Services/categories.service';
@Component({
  selector: 'app-entry-add',
  templateUrl: './entry-add.component.html',
  styleUrls: ['./entry-add.component.css'],
  providers: [EntriesService]
})
export class EntryAddComponent implements OnInit {

  constructor(private entryService: EntriesService,
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private categoryService:CategoriesService 
    )  { }
  entry!: Entry;
  entryAddForm !:FormGroup;
  categories: Category[] = [];

  createEntryForm() {
    this.entryAddForm = this.formBuilder.group(
      {
        header: ["", Validators.required],
        subject: ["", Validators.required],
        body: ["", Validators.required],
        tags: ["", Validators.required],
      }
    )

  }

  ngOnInit(): void {
   this.createEntryForm();
   this.categoryService.getCategories().subscribe(data=>{
    this.getCategoryList(data);
  });
  }

  add() {
    if (this.entryAddForm.valid) {
      this.entry = Object.assign({}, this.entryAddForm.value)
      this.entry.userId = this.getUserId();
      this.entryService.add(this.entry);  
    }
  }
  getUserId(){
    return this.authService.getCurrentUserId();
  }
  getCategoryList(arr:Category[]){
    arr.forEach(element => {
        this.categories.push(element)
    });
  }
                
  
}