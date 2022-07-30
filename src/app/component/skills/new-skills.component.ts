import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/s-skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {

  nombreH: string = '';
  progressH: number  ;


  constructor(private sSkills: SSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const ski = new Skills(this.nombreH, this.progressH);
    this.sSkills.save(ski).subscribe(data=>{alert("Se añadió habilidad");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló ingreso habilidad");
      this.router.navigate(['']);
    }

    
    )
  }

}
