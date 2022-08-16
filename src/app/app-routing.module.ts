import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryAddComponent } from './entry-add/entry-add.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'entryDetail/:entryId',component:EntryDetailComponent},
  { path: 'entryAdd',component:EntryAddComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
