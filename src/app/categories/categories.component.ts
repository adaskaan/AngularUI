import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category';
import { Entry } from '../models/entry';
import { EntriesService } from '../Services/entries.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private entryService:EntriesService) { }
  category! : Category;
  entries:Entry[]=[];
  result:Entry[]=[];
  ngOnInit(): void {
    this.entryService.getEntries().subscribe(data=>{
      this.getEntries(data)
    })
    this.activatedRoute.params.subscribe(params=>{
      this.getByCategoryList(params["categoryId"])
    })

  }
  
  getByCategoryList(id:number){
        this.entries.forEach(element => {
          if(element.categoryId==id){
            this.result.push(element)
          }
        
        
    });
  }
  getEntries(arr:Entry[]){
    arr.forEach(element=>{
      this.entries.push(element);
    });
  }

}
