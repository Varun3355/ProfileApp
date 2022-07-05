import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Nav/about/about.component';
import { EduComponent } from './Nav/edu/edu.component';
import { SkillComponent } from './Nav/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EduComponent,
    SkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
