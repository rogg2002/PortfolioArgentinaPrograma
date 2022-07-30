

//definimos clase persona atributos constructor

export class persona{
    id?:number;
    nombre:string;
    apellido: string;
    img: string;

// constructor
    constructor(nombre: string,apellido: string,img: string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
    }
}