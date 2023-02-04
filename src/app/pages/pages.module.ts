import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ProjectComponent } from './project/project.component';
import { EducationComponent } from './education/education.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomeComponent,
    SkillsComponent,
    ContactComponent,
    ServicesComponent,
    ProjectComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
  ]
})
export class PagesModule { }
