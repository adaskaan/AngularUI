import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EntryComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    EntryDetailComponent,
    EntryAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
