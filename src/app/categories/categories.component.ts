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
  id!:number;
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.getByCategoryList(params["categoryId"])
    })
    this.entryService.getEntries().subscribe(data=>{
      this.getEntries(data)
    })
  }
  
  getByCategoryList(id:number){
    this.id=id;

  }
  
  getEntries(arr:Entry[]){
    arr.forEach(element=>{
      if(element.categoryId==this.id){
      this.entries.push(element);
      }
    });
  }

}
