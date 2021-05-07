import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'works', component: WorksComponent},
  {path: 'skills', component: SkillsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
