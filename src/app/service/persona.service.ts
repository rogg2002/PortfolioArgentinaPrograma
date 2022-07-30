

// generamos carpeta service ng g s



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL='http://localhost:8080/personas/';  //llamamos al back


  constructor(private http:HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL + 'traer/perfil'); 
  }




// agrego metodos
  public detail(id: number): Observable<persona>{
    return this.http.get<persona>(this.URL + `detail/${id}`)
  }
  public update(id: number, educacion: persona): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, educacion);
    
  }
//fin agrego metodos
}
