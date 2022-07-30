import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './component/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './component/educacion/edit-educacion.component';
//import { EducacionComponent } from './component/educacion/educacion.component';
import { NewEducacionComponent } from './component/educacion/new-educacion.component';
import { EditExperienciaComponent } from './component/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './component/experiencia/new-experiencia.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { EditProyectosComponent } from './component/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './component/proyectos/new-proyectos.component';
import { EditSkillsComponent } from './component/skills/edit-skills.component';
import { NewSkillsComponent } from './component/skills/new-skills.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'nuevaexp', component: NewExperienciaComponent },
{ path:'editexp/:id', component: EditExperienciaComponent},
{ path:'nuevaedu', component: NewEducacionComponent},
{ path:'nuevaproy', component: NewProyectosComponent},
{ path:'editedu/:id', component: EditEducacionComponent},
{ path:'editproy/:id', component: EditProyectosComponent},
{ path:'editacer/:id', component: EditAcercaDeComponent},
{ path: 'nuevaski', component: NewSkillsComponent },
{ path:'editski/:id', component: EditSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
