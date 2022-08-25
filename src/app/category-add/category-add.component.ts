import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category';
import { AuthService } from '../Services/auth.service';
import { CategoriesService } from '../Services/categories.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  constructor(private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private authService:AuthService 
    )  { }
  category!: Category;
  categoryAddForm !:FormGroup;

  createCategoryForm() {
    this.categoryAddForm = this.formBuilder.group(
      {
        categoryName: ["", Validators.required],

      }
    )

  }

  ngOnInit(): void {
   this.createCategoryForm();
  }
  add() {
    if (this.categoryAddForm.valid) {
      this.category = Object.assign({}, this.categoryAddForm.value)
      this.categoriesService.add(this.category);  
    }
  }
 get isAdmin(){
  return this.authService.IsAdmin;
 }
}

