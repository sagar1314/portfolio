import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { ServicesComponent } from './pages/services/services.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WildcartComponent } from './wildcart/wildcart.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
