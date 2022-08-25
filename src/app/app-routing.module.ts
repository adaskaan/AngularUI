import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryAddComponent } from './entry-add/entry-add.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoriesComponent } from './categories/categories.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'entryDetail/:entryId',component:EntryDetailComponent},
  { path: 'entryAdd',component:EntryAddComponent},
  { path: 'admin',component:AdminComponent},
  {path:'profile',component:ProfileComponent},
  {path:'categoryAdd',component:CategoryAddComponent},
  { path: 'categories/:categoryId',component:CategoriesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
