import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavBarComponent} from 'src/app/nav-bar/nav-bar.component'
import { HomeComponent } from './pages/Home/home.component';
import { FormalEducationComponent } from './pages/formal-education/formal-education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Formal-Education', component: FormalEducationComponent},
  {path:'Experience', component: ExperienceComponent},
  {path:'Contact-Me', component: ContactMeComponent},
  {path:'**',  redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
