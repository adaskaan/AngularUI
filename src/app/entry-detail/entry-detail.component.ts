
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category';
import { Entry } from '../models/entry';
import { CategoriesService } from '../Services/categories.service';
import { EntriesService } from '../Services/entries.service';
@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css'],
  providers:[EntriesService]
})
export class EntryDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private entryService:EntriesService,
    private categoryService:CategoriesService) { }
  entry! : Entry;
  categories:Category[]=[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getEntryById(params["entryId"])
    })
    this.categoryService.getCategories().subscribe(data=>{
      this.getCategories(data)
    })
  }
  getEntryById(entryId:any){
    this.entryService.getEntryById(entryId).subscribe(data=>{
      this.entry = data;
    })
  }
  getCategoryName(id:number){

    var temp="none"
    
      this.categories.forEach(element => {
        if(id==element.id){
          
          temp =  element.categoryName;  

        }       
        return temp;
      });
      return temp;
}
getCategories(arr:Category[]){
  arr.forEach(element=>{this.categories.push(element)})
}
}