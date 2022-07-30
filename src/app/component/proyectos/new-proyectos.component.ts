import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';


@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {

  nombrePro: string = '';
  descripcionPro: string = '';
  linkPro: string = '';


  constructor(private sProyectos: SProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proy = new Proyectos(this.nombrePro, this.descripcionPro, this.linkPro);
    this.sProyectos.save(proy).subscribe(data=>{alert("Se añadió Proyecto");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló ingreso de proyecto");
      this.router.navigate(['']);
    }

    
    )
  }

}
