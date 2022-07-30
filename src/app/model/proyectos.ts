export class Proyectos {
    id?: number;
    nombrePro: string;
    descripcionPro: string;
    linkPro: string;

    constructor(nombrePro: string, descripcionPro: string, linkPro: string){
      this.nombrePro = nombrePro;
      this.descripcionPro = descripcionPro;
      this.linkPro = linkPro;
      
    }
}
