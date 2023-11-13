import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormalEducationComponent } from './pages/formal-education/formal-education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormalEducationComponent,
    ExperienceComponent,
    ContactMeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
