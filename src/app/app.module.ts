import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './component/skills/skills.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { FooterComponent } from './component/footer/footer.component';

import {HttpClientModule }from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service.service';
import { NewExperienciaComponent } from './component/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './component/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './component/educacion/new-educacion.component';
import { NewProyectosComponent } from './component/proyectos/new-proyectos.component';
import { EditEducacionComponent } from './component/educacion/edit-educacion.component';
import { EditProyectosComponent } from './component/proyectos/edit-proyectos.component';
import { EditAcercaDeComponent } from './component/acerca-de/edit-acerca-de.component';
import { NewSkillsComponent } from './component/skills/new-skills.component';
import { EditSkillsComponent } from './component/skills/edit-skills.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    NewProyectosComponent,
    EditEducacionComponent,
    EditProyectosComponent,
    EditAcercaDeComponent,
    NewSkillsComponent,
    EditSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    }),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
