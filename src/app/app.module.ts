import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EntriesService } from './Services/entries.service';
import { EntryComponent } from './entry/entry.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { EntryAddComponent } from './entry-add/entry-add.component';
import { AlertifyService } from './Services/alertify.service';
import {JwtModule} from "@auth0/angular-jwt";
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EntryComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    EntryDetailComponent,
    EntryAddComponent,
    AdminComponent,
    ProfileComponent,
    CategoryAddComponent,
    CategoriesComponent,
    SearchComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule 
    
  ],
  
  providers: [EntriesService, AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
