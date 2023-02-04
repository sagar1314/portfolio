import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildcartComponent } from '../wildcart/wildcart.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"skills",component:SkillsComponent},
  {path:"services",component:ServicesComponent},
  {path:"edu",component:EducationComponent},
  {path:"project",component:ProjectComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:WildcartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
